package com.vn.BackEnd_Job_Website.Controller;

import com.vn.BackEnd_Job_Website.Model.UserAccount;
import com.vn.BackEnd_Job_Website.Service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/useraccounts")
public class UserAccountController {
    private final UserAccountService userAccountService;

    @Autowired
    public UserAccountController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserAccount> registerUser(@RequestBody UserAccount userAccount) {
        UserAccount registeredUser = userAccountService.registerUser(userAccount);
        return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
    }

//    @PostMapping("/login")
//    public ResponseEntity<UserAccount> loginUser(@RequestParam String email, @RequestParam String password) {
//        UserAccount loggedInUser = userAccountService.loginUser(email, password);
//        return ResponseEntity.ok(loggedInUser);
//    }
}

