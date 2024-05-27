package com.generation.projectwork.mvcontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class mvcController {

	public ModelAndView getPage(
		    @RequestParam(value="email", required=false) String email, 
		    @RequestParam(value="password", required = false) String password) {
				return null;
		}
}
