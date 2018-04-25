package socialAndServices;

import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

import model.Venue;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Google {
	
	private final String KEY_1 = "AIzaSyBtWVIxvuolF1NnywTXlgW-rMENVpPu7XU"; 
	private final String KEY_2 = "AIzaSyCifkuwwvnZapHqwzugDP61vaJ4f21L_h8";
	
	private String key;
	private int count = 0;
	
	public Google() {
		this.key = KEY_1;
	}
	
	public String getKey() {
		return this.key;
	}
	
	
	public void changeKey() {
		if (this.getKey().equals(KEY_1))
			this.key = KEY_2;
		else
			this.key = KEY_1;
	}
	
	
	public Venue getCoordinatesFromAddress(String address) {
		Venue venue = new Venue();
		try {
			URL url = new URL("https://maps.googleapis.com/maps/api/geocode/json?address=" + address.replace(" ", "+") + "&sensor=false");
            URLConnection conn = url.openConnection();                                                                    
            conn.connect();
            InputStreamReader isr = new InputStreamReader(conn.getInputStream());
            StringBuffer sb = new StringBuffer();

            for (int i=0; i!=-1; i=isr.read()) {   
                sb.append((char)i);
            }
            String jsonString = sb.toString().trim();
            
            JSONObject jsonObject = new JSONObject(jsonString);
            String status = jsonObject.getString("status");
            
            if (status.equals("OK")) {
            	JSONArray results = jsonObject.getJSONArray("results");                             
                String lat = results.getJSONObject(0).getJSONObject("geometry").getJSONObject("location").get("lat").toString();
                String lng = results.getJSONObject(0).getJSONObject("geometry").getJSONObject("location").get("lng").toString();
                String formattedAddress = results.getJSONObject(0).getString("formatted_address");
                
                venue.setLatitude(lat);
                venue.setLongitude(lng);
                venue.setStatus(status);
                venue.setName_fq(formattedAddress);	// escamotage: name_fq contains the address
            }
            else {
            	venue.setStatus(status);            	
            }            
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
        	e.printStackTrace();
		}
		
		return venue;
	}
	
	
	
	/**
	 * mode=driving		--> (default) indicates standard driving directions using the road network
	 * mode=walking		--> requests walking directions via pedestrian paths & sidewalks (where available)
	 * mode=bicycling	--> requests bicycling directions via bicycle paths & preferred streets (where available)
	 * mode=transit		--> requests directions via public transit routes (where available)
	 **/
	public int getTimeBetweenTwoPoints(Venue from, Venue to, String mode) {
		/*try {
			if (this.count == 10) {
				Thread.sleep(4000);
				this.count = 0;
			}
			else 
				this.count++;
		} catch (InterruptedException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}*/
		String timeInSecond = null;
		URL url = null;
		try {
			String latLngFrom = from.getLatitude() + "," + from.getLongitude();
			String latLngTo = to.getLatitude() + "," + to.getLongitude();
			//url = new URL("http://maps.googleapis.com/maps/api/directions/json?origin=" + latLngFrom + "&destination=" + latLngTo + "&sensor=false&mode=" + mode);
			url = new URL("https://maps.googleapis.com/maps/api/directions/json?origin=" + latLngFrom + "&destination=" + latLngTo + "&sensor=false&key=" + this.getKey() + "&mode=" + mode);
            URLConnection conn = url.openConnection();                                                                    
            conn.connect();
            InputStreamReader isr = new InputStreamReader(conn.getInputStream());
            StringBuffer sb = new StringBuffer();

            for (int i=0; i!=-1; i=isr.read()) {   
                sb.append((char)i);
            }
            String jsonString = sb.toString().trim();
            
            JSONObject jsonObject = new JSONObject(jsonString);
            String status = jsonObject.getString("status");
            
            if (status.equals("OK")) {
            	JSONArray routes = jsonObject.getJSONArray("routes");
            	JSONArray legs = routes.getJSONObject(0).getJSONArray("legs");
            	timeInSecond = legs.getJSONObject(0).getJSONObject("duration").get("value").toString();
            	//JSONArray steps = legs.getJSONObject(0).getJSONArray("steps"); per le indicazioni stradali
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
        	e.printStackTrace();
		}
		
		if (timeInSecond != null)
			return Integer.parseInt(timeInSecond)/60;	// minutes
		else {
			/*System.out.println(url.toString());
			if (this.getKey().equals(KEY_1)) {
				this.changeKey();
				return this.getTimeBetweenTwoPoints(from, to, mode);
			} else
				return -1;*/
			return this.getTimeBetweenTwoPoints(from, to, mode);
		}
	}


	

}
