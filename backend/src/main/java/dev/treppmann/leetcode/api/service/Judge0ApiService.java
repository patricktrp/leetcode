package dev.treppmann.leetcode.api.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import dev.treppmann.leetcode.api.entity.ProgrammingLanguage;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class Judge0ApiService implements CodeExecutionService {
    @Value("${rapidapi-key}")
    private String rapidApiKey;
    @Value("${rapidapi-host")
    private String rapidApiHost;
    private final String JUDGE0_API_BASE_URL = "https://judge0-ce.p.rapidapi.com/";
    private final MediaType JSON = MediaType.get("application/json");
    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();
    private int getLanguageId(ProgrammingLanguage programmingLanguage) {
        return switch (programmingLanguage) {
            case PYTHON -> 92;
            case JAVASCRIPT -> 93;
            default -> -1;
        };
    }

    @Override
    public void executeCode(ProgrammingLanguage programmingLanguage, String code) {
        int languageId = getLanguageId(programmingLanguage);
        if (languageId == -1) return;

        try {
            String jsonBody = objectMapper.writeValueAsString(new RequestBodyData(languageId, code));
            RequestBody requestBody = RequestBody.create(jsonBody, JSON);

            Request request = new Request.Builder()
                    .url(JUDGE0_API_BASE_URL)
                    .post(requestBody)
                    .addHeader("Content-Type", "application/json")
                    .addHeader("X-RapidAPI-Key", rapidApiKey)
                    .addHeader("X-RapidAPI-Host", rapidApiHost)
                    .build();

        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }

    private static class RequestBodyData {
        int language_id;
        String code;

        public RequestBodyData(int language_id, String code) {
            this.language_id = language_id;
            this.code = code;
        }
    }
}
