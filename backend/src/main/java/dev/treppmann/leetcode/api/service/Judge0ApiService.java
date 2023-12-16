package dev.treppmann.leetcode.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.treppmann.leetcode.api.dto.CodeRunResponse;
import dev.treppmann.leetcode.api.dto.Judge0Response;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import dev.treppmann.leetcode.api.entity.SkeletonTestCode;
import dev.treppmann.leetcode.api.entity.TestCaseList;
import dev.treppmann.leetcode.api.repository.SkeletonTestCodeRepository;
import dev.treppmann.leetcode.api.repository.TestCaseListRepository;
import lombok.Data;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Service
public class Judge0ApiService implements CodeExecutionService {
    @Value("${rapidapi-key}")
    private String rapidApiKey;
    @Value("${rapidapi-host}")
    private String rapidApiHost;
    private final MediaType JSON = MediaType.get("application/json");
    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();

    private int getLanguageId(ProgrammingLanguage programmingLanguage) {
        return switch (programmingLanguage) {
            case PYTHON -> 92;
            case JAVASCRIPT -> 93;
        };
    }

    @Override
    public CodeRunResponse executeCode(ProgrammingLanguage programmingLanguage, String code, String jsonTestCases) {
        int languageId = getLanguageId(programmingLanguage);
        if (languageId == -1) return null;

        String encodedSourceCode = Base64.getEncoder().encodeToString(code.getBytes());

        byte[] zipData = zipJson(jsonTestCases);
        String base64EncodedZip = Base64.getEncoder().encodeToString(zipData);

        try {
            String jsonBody = objectMapper.writeValueAsString(new RequestBodyData(languageId, encodedSourceCode, base64EncodedZip, false));
            RequestBody requestBody = RequestBody.create(jsonBody, JSON);

            Request request = new Request.Builder()
                    .url("https://judge0-ce.p.rapidapi.com/submissions?wait=true&base64_encoded=true&fields=stdout,stderr")
                    .post(requestBody)
                    .addHeader("content-type", "application/json")
                    .addHeader("Content-Type", "application/json")
                    .addHeader("X-RapidAPI-Key", rapidApiKey)
                    .addHeader("X-RapidAPI-Host", rapidApiHost)
                    .build();

            Response response = client.newCall(request).execute();
            assert response.body() != null;
            Judge0Response judge0Response = objectMapper.readValue(response.body().string(), Judge0Response.class);
            if (judge0Response.stdout() != null) {
                String cleanedBase64 = judge0Response.stdout().replace("\n", "");
                byte[] decodedBytes = Base64.getDecoder().decode(cleanedBase64);
                String output = new String(decodedBytes);
                System.out.println(output);
            } else {
                String cleanedBase64 = judge0Response.stderr().replace("\n", "");
                byte[] decodedBytes = Base64.getDecoder().decode(cleanedBase64);
                String output = new String(decodedBytes);
                System.out.println(output);
            }
        } catch (IOException e) {
            System.out.println("Error");
        }
        return null;
    }

    @Data
    private static class RequestBodyData {
        int language_id;
        String source_code;
        String additional_files;
        boolean redirect_stderr_to_stdout;

        public RequestBodyData(int language_id, String source_code, String additional_files, boolean redirect_stderr_to_stdout) {
            this.language_id = language_id;
            this.source_code = source_code;
            this.additional_files = additional_files;
            this.redirect_stderr_to_stdout = redirect_stderr_to_stdout;
        }
    }

    private byte[] zipJson(String json) {
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ZipOutputStream zipOutputStream = new ZipOutputStream(baos);
            zipOutputStream.putNextEntry(new ZipEntry("test_cases.json"));

            // Write the JSON data to the zip stream
            zipOutputStream.write(json.getBytes());
            zipOutputStream.closeEntry();
            zipOutputStream.close();

            return baos.toByteArray();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
