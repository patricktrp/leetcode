package dev.treppmann.leetcode.api.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;

@ControllerAdvice
public class GlobalExceptionHandler {
//    @ExceptionHandler(HttpClientErrorException.class)
//    public ResponseEntity<String> handleHttpClientErrorException(HttpClientErrorException ex) {
//        return switch (ex.getStatusCode()) {
//            case HttpStatus.NOT_FOUND -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Resource not found");
//            case HttpStatus.FORBIDDEN -> ResponseEntity.status(HttpStatus.FORBIDDEN).body("Unauthorized access");
//            case HttpStatus.BAD_REQUEST -> ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Bad Request");
//            default -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
//        };
//    }
}