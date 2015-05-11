package models;

import java.util.Date;

import javax.persistence.Entity;

import play.db.jpa.Model;

/**
 * @author ahern88
 * @date 2015年5月11日
 * @version 1.0
 */
@Entity
public class Users extends Model {
	
	/**
	 * 用户名
	 */
	public String userName;
	
	/**
	 * 密码
	 */
	public String password;
	
	/**
	 * 邮箱
	 */
	public String email;
	
	/**
	 * 年龄
	 */
	public Integer age;
	
	/**
	 * 生日
	 */
	public Date birthday;
	
	/**
	 * 注册时间
	 */
	public Date registerDate;
	
	/**
	 * 最后登陆时间
	 */
	public Date lastLoginDate;
	
	/**
	 * 状态，0：未通过审核 1：正常状态 99：未被激活 88：被删除
	 */
	public Integer status;

}
