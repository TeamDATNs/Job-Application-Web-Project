package com.vn.BackEnd_Job_Website.Service.impl;

import com.vn.BackEnd_Job_Website.Model.UserAccount;
import com.vn.BackEnd_Job_Website.Respository.UserAccountRepository;
import com.vn.BackEnd_Job_Website.Service.UserAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserAccountServiceImpl implements UserAccountService {
    private final UserAccountRepository userAccountRepository;

    @Autowired
    public UserAccountServiceImpl(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    @Override
    public UserAccount registerUser(UserAccount userAccount) {
        Optional<UserAccount> existingUser = userAccountRepository.findByEmail(userAccount.getEmail());
        if (existingUser.isPresent()) {
            throw new DuplicateKeyException("Email đã được sử dụng");
        }

        return userAccountRepository.save(userAccount);
    }

//    @Override
//    public UserAccount loginUser(String email, String password) {
//        Optional<UserAccount> userAccount = userAccountRepository.findByEmail(email);
//        if (userAccount.isPresent() && userAccount.get().getPassword().equals(password)) {
//            return userAccount.get();
//        }
//    }
}

