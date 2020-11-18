package com.RIP.todoapp.controller;

import com.RIP.todoapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RegistrationController {

        @Autowired
        private UserService userService;

        @GetMapping("/registration")
        public String registration(Model model) {
            model.addAttribute("userForm", new User());

            return "registration";
        }

        @PostMapping("/registration")
        public String addUser(@ModelAttribute("userForm") @Valid User userForm, BindingResult bindingResult, Model model) {

            if (bindingResult.hasErrors()) {
                return "registration";
            }
            if (!userForm.getPassword().equals(userForm.getPasswordConfirm())){
                model.addAttribute("Пароли не совпадают",User);
                return "registration";
            }
            if (!userService.saveUser(userForm)){
                model.addAttribute("Пользователь с таким именем уже существует",User);
                return "registration";
            }

            return "redirect:/";
        }
}
