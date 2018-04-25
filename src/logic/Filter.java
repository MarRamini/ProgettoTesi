package logic;

import java.util.List;

import model.Context;
import model.Venue;

import org.json.JSONException;
import org.json.JSONObject;

import util.Utilities;

public class Filter {
	
	private static final boolean[] CATEGORIES_OUTDOOR =			{false,	false,	false,	false,	true,	false,	false,	true,	true,	false,	false};
	private static final boolean[] CATEGORIES_OPENorCLOSED =	{true,	true,	true,	true,	true,	true,	true,	true,	true,	false,	true,	true};
	
	
	private Context context;
	
	public Filter(Context context) {
		this.context = context;
	}
	
	/* 
	 * 		Category				|	Id/Index	|  outdoor?	| open/closed
	 *	-----------------------------------------------------------------------
	 * 	Arts						|		1		|	 no		|	 yes
	 * 	Entertainment				|		2		|	 no		|	 yes
	 * 	Museum						|		3		|	 no		|	 yes
	 * 	History & Monuments			|		4		|	 yes	|	 yes
	 * 	Food						|		5		|	 no		|	 yes
	 * 	Nightlife Spot				|		6		|	 no		|	 yes
	 * 	Outdoors & Recreation		|		7		|	 yes	|	 no
	 * 	Athletics & Sports			|		8		|	 yes	|	 yes
	 * 	Church						|		9		|	 no		|	 yes
	 * 	Shop & Service				|		10		|	 no		|	 yes	 * 	
	 * 
	 */
	
	
	public List<Venue> filterVenues(List<Venue> venues) {
		if (!this.context.getSunny())
			filterByWeather(venues);
		filterByClosingTime(venues);
		return venues;
	}
		
	
	
		
	public void filterByWeather(List<Venue> venues) {
		for (int i=0; i<venues.size(); i++) {
			if (CATEGORIES_OUTDOOR[venues.get(i).getMacro_category().getId()])
				venues.remove(i);
		}
	}
	
	
	
	
	public void filterByClosingTime(List<Venue> venues) {
		String url;
        JSONObject jsonObject;
        JSONObject venueJsonObject;
        String isOpen;
        Venue v;
        
        //String start = this.context.getStart().toLowerCase();
        //String end = this.context.getEnd().toLowerCase();
        
        try {        	
        	for (int i=0; i<venues.size(); i++) {
        		v = venues.get(i);
        		if (v.getCategory_fq().equals("Multiplex")) {venues.remove(i); continue; }
        		if (v.getCategory_fq().equals("Theater")) {venues.remove(i); continue; }
        		if (v.getCategory_fq().equals("Indie Theater")) {venues.remove(i); continue; }
        		if (v.getCategory_fq().equals("Indie Movie Theater")) {venues.remove(i); continue; }
        		
        		/*if (start.matches(".*" + v.getName_fq().toLowerCase() + ".*") || end.matches(".*" + v.getName_fq().toLowerCase() + ".*")) {
        			venues.remove(i);
        			continue;
        		}*/
        			
        		if (CATEGORIES_OPENorCLOSED[v.getMacro_category().getId()] && v.getFoursquare_id() != null) {
        			url = "https://api.foursquare.com/v2/venues/"
            				+ v.getFoursquare_id()
            				+ "?client_id=YYKMILQ24YMAF1WSXVDMQRIAUUYBAZ4HJFW5KCCKEEE2M1DA"
            				+ "&client_secret=4DEGSCLCLJPMF31IJD5XT2Q2B01RUJROKLIMWBNS4YWAIVG3"
            				+ "&v=20120609";        			
        	        jsonObject = Utilities.getJSONObjectFromURL(url);
        	        if (jsonObject == null)
        	        	continue;
        	        
        	        venueJsonObject = jsonObject.getJSONObject("response").getJSONObject("venue");
        	        
        	        if (venueJsonObject.has("hours"))
        	        	isOpen = venueJsonObject.getJSONObject("hours").get("isOpen").toString();
        	        else
        	        	isOpen = "true";
        	        
        	        if (isOpen.equals("false")) {
        	        	System.out.println(v.getName_fq() + " chiuso.");
        	        	venues.remove(i);        	        	
        	        }
        		}        		
    		}        	
        } catch (JSONException e) {
        	e.printStackTrace();
		}
	}
	
	
	
	public static void filterClosedVenues(List<Venue> venues, String start, String end) {
		String url;
        JSONObject jsonObject;
        JSONObject venueJsonObject;
        String isOpen;
        Venue v;
        
        try {        	
        	for (int i=0; i<venues.size(); i++) {
        		v = venues.get(i);
        		
        		if (start.toLowerCase().matches(".*" + v.getName_fq().toLowerCase() + ".*") || 
        			end.toLowerCase().matches(".*" + v.getName_fq().toLowerCase() + ".*")) {
        			venues.remove(i);
        			continue;
        		}
        			
        		
        		if (CATEGORIES_OPENorCLOSED[v.getMacro_category().getId()] && v.getFoursquare_id() != null) {
        			url = "https://api.foursquare.com/v2/venues/"
            				+ v.getFoursquare_id()
            				+ "?client_id=YYKMILQ24YMAF1WSXVDMQRIAUUYBAZ4HJFW5KCCKEEE2M1DA"
            				+ "&client_secret=4DEGSCLCLJPMF31IJD5XT2Q2B01RUJROKLIMWBNS4YWAIVG3"
            				+ "&v=20120609";        			
        	        jsonObject = Utilities.getJSONObjectFromURL(url);
        	        if (jsonObject == null)
        	        	continue;
        	        
        	        venueJsonObject = jsonObject.getJSONObject("response").getJSONObject("venue");
        	        
        	        if (venueJsonObject.has("hours"))
        	        	isOpen = venueJsonObject.getJSONObject("hours").get("isOpen").toString();
        	        else
        	        	isOpen = "true";
        	        
        	        if (isOpen.equals("false")) {
        	        	System.out.println(venues.get(i).getName_fq() + " chiuso");
        	        	venues.remove(i);        	        	
        	        }
        		}        		
    		}        	
        } catch (JSONException e) {
        	e.printStackTrace();
		}
	}

}
