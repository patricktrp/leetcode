package dev.treppmann.leetcode.api.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(HttpClientErrorException.class)
    public ResponseEntity<String> handleHttpClientErrorException(HttpClientErrorException ex) {
        HttpStatusCode statusCode = ex.getStatusCode();
        ResponseEntity<String> responseEntity;

        if (HttpStatus.NOT_FOUND.equals(statusCode)) {
            responseEntity = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Resource not found");
        } else if (HttpStatus.FORBIDDEN.equals(statusCode)) {
            responseEntity = ResponseEntity.status(HttpStatus.FORBIDDEN).body("Unauthorized access");
        } else if (HttpStatus.BAD_REQUEST.equals(statusCode)) {
            responseEntity = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad Request");
        } else {
            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }

        return responseEntity;
    }
}
