package com.vn.BackEnd_Job_Website.Service.impl;

import com.vn.BackEnd_Job_Website.Model.Account;
import com.vn.BackEnd_Job_Website.Model.Company;
import com.vn.BackEnd_Job_Website.Respository.CompanyRepository;
import com.vn.BackEnd_Job_Website.Service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;


    private void getInfo(MultipartFile file){

    }

    @Override
    public Company addAvatar(MultipartFile avatar) throws Exception {
        String fileName = StringUtils.cleanPath(avatar.getOriginalFilename());
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var company = companyRepository.findByAccountID(account.getId()).orElseThrow();
        try {
            if(fileName.contains("..")) {
                throw new Exception("Filename contains invalid path sequence " + fileName);
            }
            companyRepository.uploadAvatarByAccountID(avatar.getBytes(), company.getId());
            return company;
        } catch (Exception e) {
            throw new Exception("Could not save File: " + fileName);
        }
    }

    @Override
    public Company addCover(MultipartFile cover) throws Exception {
        String fileName = StringUtils.cleanPath(cover.getOriginalFilename());
        var account = (Account) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        try {
            if(fileName.contains("..")) {
                throw new Exception("Filename contains invalid path sequence " + fileName);
            }
            companyRepository.uploadCoverByAccountID(cover.getBytes(), account.getId());
            return null;
        } catch (Exception e) {
            throw new Exception("Could not save File: " + fileName);
        }
    }
}
