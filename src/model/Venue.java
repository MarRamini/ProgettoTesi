package model;

import java.util.ArrayList;
import java.util.List;

public class Venue {
	
	private int id;
	private double latitude;
	private double longitude;
	//private int checkinsNumber;
	private String name_fq;
	private String category_fq;
	private String status;
	private MacroCategory macro_category;
	private String foursquare_id;
	private String link_fq;
	private List<Checkin> checkins;
	private String label;	
	private String identifier;
	private boolean likeFlag;
	
	public Venue() {
		this.checkins = new ArrayList<Checkin>();
	}
	
	public int getId() {
		return this.id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public double getLatitude() {
		return this.latitude;
	}
	
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	
	public double getLongitude() {
		return this.longitude;
	}
	
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	
	public String getName_fq() {
		return this.name_fq;
	}
	
	public void setName_fq(String name_fq) {
		this.name_fq = name_fq;
	}
	
	public String getCategory_fq() {
		return this.category_fq;
	}
	
	public void setCategory_fq(String category_fq) {
		this.category_fq = category_fq;
	}
	
	public String getStatus() {
		return this.status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}

	public int getCheckinsNumber() {
		return this.checkins.size();
	}	

	public MacroCategory getMacro_category() {
		return macro_category;
	}

	public void setMacro_category(MacroCategory macro_category) {
		this.macro_category = macro_category;
	}

	public String getFoursquare_id() {
		return foursquare_id;
	}

	public void setFoursquare_id(String foursquare_id) {
		this.foursquare_id = foursquare_id;
	}

	public String getLink_fq() {
		return link_fq;
	}

	public void setLink_fq(String link_fq) {
		this.link_fq = link_fq;
	}

	public List<Checkin> getCheckins() {
		return this.checkins;
	}

	public void setCheckins(List<Checkin> checkins) {
		this.checkins = checkins;
	}
	
	public void addCheckin(Checkin c) {
		this.checkins.add(c);
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getIdentifier() {
		return identifier;
	}

	public void setIdentifier(String identifier) {
		this.identifier = identifier;
	}

	public boolean getLikeFlag() {
		return likeFlag;
	}

	public void setLikeFlag(boolean likeFlag) {
		this.likeFlag = likeFlag;
	}
	
}