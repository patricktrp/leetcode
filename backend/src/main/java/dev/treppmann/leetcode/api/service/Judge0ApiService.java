package dev.treppmann.leetcode.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.treppmann.leetcode.api.dto.CodeRunResponse;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Base64;

@Service
public class Judge0ApiService implements CodeExecutionService {
    private final String PYTHON_APPENDIX = "\n" +
            "for i in range(5):\n" +
            "\tprint(f\"-------- Test Case {i+1} --------\")\n" +
            "\ttwo_sum([1, 2, 3, 4], 3)\n" +
            "\tprint()";

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
    public CodeRunResponse executeCode(ProgrammingLanguage programmingLanguage, String code) {
        int languageId = getLanguageId(programmingLanguage);
        if (languageId == -1) return null;

        code += PYTHON_APPENDIX;
        String encodedSourceCode = Base64.getEncoder().encodeToString(code.getBytes());
        try {
            String jsonBody = objectMapper.writeValueAsString(new RequestBodyData(languageId, encodedSourceCode));
            RequestBody requestBody = RequestBody.create(jsonBody, JSON);

            Request request = new Request.Builder()
                    .url("https://judge0-ce.p.rapidapi.com/submissions?wait=true&base64_encoded=true&fields=*")
                    .post(requestBody)
                    .addHeader("content-type", "application/json")
                    .addHeader("Content-Type", "application/json")
                    .addHeader("X-RapidAPI-Key", rapidApiKey)
                    .addHeader("X-RapidAPI-Host", rapidApiHost)
                    .build();

            Response response = client.newCall(request).execute();
            System.out.println(response.body().string());
        } catch (IOException e) {
            System.out.println("Error");
        }
        return null;
    }

    private static class RequestBodyData {
        int language_id;
        String source_code;

        public RequestBodyData(int language_id, String source_code) {
            this.language_id = language_id;
            this.source_code = source_code;
        }

        public int getLanguage_id() {
            return language_id;
        }

        public void setLanguage_id(int language_id) {
            this.language_id = language_id;
        }

        public String getSource_code() {
            return source_code;
        }

        public void setSource_code(String source_code) {
            this.source_code = source_code;
        }

        public RequestBodyData(){}
    }
}
