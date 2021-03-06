package model;

public class Search {
	
	private String address;
	private double latitude;
	private double longitude;
	
	public Search() {}
	
	public String getAddress() {
		return address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
	public double getLatitude() {
		return latitude;
	}
	
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	
	public double getLongitude() {
		return longitude;
	}
	
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	
	public boolean equals(Object obj){
		if(obj != null){
			return ((Search) obj).getAddress().equals(this.getAddress()) || 
					(((Search) obj).getLatitude() == this.getLatitude() && ((Search) obj).getLongitude() == this.getLongitude());
		}
		return false;
	}
	
	public String toString(){		
		return "Search object: \n-address: " + this.getAddress() + 
				"\n-latitude: " + this.getLatitude() + 
				"\n-longitude: " + this.getLongitude();		
	}
}
