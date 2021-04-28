package com.egemmerce.hc.user.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

/**
 * 
 * @Date 2021. 4. 26.
 * @Title Haggle-Credit Backend
 * @Description : 비밀번호 암호화를 위한 Salt관련 클래스
 * 	- salt값 생성 메소드
 * 	- 비밀번호 및 salt 값을 활용한 암호화 메소드
 *
 */

public class SaltSHA256 {
	
	/* SALT 값 생성 */
	public static String generateSalt() {
		Random random = new Random();
		
		byte[] salt = new byte[8];
		random.nextBytes(salt);
		
		StringBuffer sb = new StringBuffer();
		for(int i = 0; i < salt.length; i++) {
			sb.append(String.format("%02x", salt[i]));
		}
		return sb.toString();
	}
	
	/* 입력한 비밀번호값과 솔트값 받아서 암호화 (반환값은 바이트화해서 String 반환 값으로 반환) */
	public static String getEncrypt(String source, String salt) {
		return getEncrypt(source, salt.getBytes());
	}
	
	/* 암호화 계산(바이트화) */
	public static String getEncrypt(String source, byte[] salt) {
		String result = "";
		
		byte[] a = source.getBytes();
		byte[] bytes = new byte[a.length + salt.length];
		
		System.arraycopy(a, 0, bytes, 0, a.length);
		System.arraycopy(salt, 0, bytes, a.length, salt.length);
		
		try {
			// 암호화 방식 지정 메소드
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(bytes);
			
			byte[] byteData = md.digest();
			
			StringBuffer sb = new StringBuffer();
			for(int i = 0; i < byteData.length; i++) {
				sb.append(Integer.toString((byteData[i] & 0xFF) + 256, 16).substring(1));
			}
			result = sb.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return result;
	}

}