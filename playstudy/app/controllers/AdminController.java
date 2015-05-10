package controllers;
import play.data.validation.Validation;
import play.mvc.After;
import play.mvc.Before;
import play.mvc.Controller;

public class AdminController extends Controller {
	
	/**
	 * 检查用户是否登陆
	 */
	@Before(unless={"login","auth"})
    static void checkAuthenticated() {
        if(!session.contains("userName")) {
            login();
        }
    }
	
	@Before(only={"login"})
	static void isLogined() {
		if(session.contains("userName")) {
            admin();
        }
	}
	
	/**
	 * 首页
	 */
	public static void index(){
		render();
	} 
	
	/**
	 * 登陆页
	 */
	public static void login(){
		render();
	}
	
	/**
	 * 验证用户名和密码
	 */
	public static void auth(String userName, String password){
		validation.required(userName);
		validation.required(password);
		if(validation.hasErrors()) {
			params.flash(); 
	        validation.keep();
	        login();
		}
		if("admin".equals(userName) && "admin".equals(password)) {
			session.put("userName", userName);
			admin();
		} else {
			Validation.addError("userNameAndPassword", "error");
			params.flash(); 
			validation.keep();
			login();
		}
	}
	
	public static void admin(){
		renderArgs.put("userName", session.get("userName"));
		render();
	}
	
	/**
	 * 退出登陆
	 */
	public static void logout(){
		session.clear();
		login();
	}
	
	public static void users(){
		render();
	}
}