/**
 * aggregates linkedgeodata ontologies into a category flag
 */

/**
 * @params revenueClass
 * @returns flag
 * translate given revenueClass into a flag representing the category of revenue used by the application
 */
function class2flag(revenueClass){
	var flag;
	
	switch(revenueClass){
		
		/*Museum*/
		case "http://linkedgeodata.org/ontology/HistoricMuseum": 
			flag = "museum";
			break;
		case "http://linkedgeodata.org/ontology/Museum": 
			flag = "museum";
			break;
		case "http://linkedgeodata.org/ontology/ArchaeologicalSite": 
			flag = "museum";
			break;
		case "http://linkedgeodata.org/ontology/Battlefield": 
			flag = "museum";
			break;
		case "http://linkedgeodata.org/ontology/PalaeontologicalSite": 
			flag = "museum";
			break;
		
		/*HistoricThing*/	
		case "http://linkedgeodata.org/ontology/Fortress": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Fountain": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Statue": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Castle": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/CityGate": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Fort": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Heritage": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricBuilding": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricFountain": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricHouse": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricMarker": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricMilestone": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricMine": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricPointOfInterest": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricStatue": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricTower": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/HistoricWell": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Icon": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Lavoir": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Manor": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Memorial": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Mill": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/MineShaft": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Monument": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Palace": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/ProtectedBuilding": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Ruins": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/RuneStone": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/SaintsCross": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/StoneCircle": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Tombstone": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Tumulus": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/UNESCOWorldHeritage": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/WaysideCross": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/WaysideShrine": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Wreck": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/Cairn": 
			flag = "historicThing";
			break;
		case "http://linkedgeodata.org/ontology/ManMadeStatue": 
			flag = "historicThing";
			break;
			
		/*Church*/
		case "http://linkedgeodata.org/ontology/BuildingChapel": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/BuildingChurch": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/BuildingMonastery": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/Chapel": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/Church": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/ChurchHall": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/Monastery": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/PlaceOfWorship": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/Abbey": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/HistoricChapel": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/HistoricChurch": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/HistoricMonastery": 
			flag = "church";
			break;
		case "http://linkedgeodata.org/ontology/WaysideChapel": 
			flag = "church";
			break;
			
		/*Arts*/
		case "http://linkedgeodata.org/ontology/ArtGallery": 
			flag = "arts";
			break;
		case "http://linkedgeodata.org/ontology/ArtGalleryShop": 
			flag = "arts";
			break;
		case "http://linkedgeodata.org/ontology/ArtsCentre": 
			flag = "arts";
			break;
		case "http://linkedgeodata.org/ontology/Artwork": 
			flag = "arts";
			break;
		case "http://linkedgeodata.org/ontology/FolkArt": 
			flag = "arts";
			break;
		case "http://linkedgeodata.org/ontology/Gallery": 
			flag = "arts";
			break;
		case "http://linkedgeodata.org/ontology/GalleryShop": 
			flag = "arts";
			break;
		case "http://linkedgeodata.org/ontology/Sculptor": 
			flag = "arts";
			break;
			
		/*Entertainment*/
		case "http://linkedgeodata.org/ontology/Bandstand": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Betting": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Brothel": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Casino": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Cinema": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Club": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/ClubHouse": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Clubhouse": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/ConcertHall": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Gambling": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/GamblingShop": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/InternetCafe": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/LicensedClub": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Music": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/MusicVenue": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Salon": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Sauna": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/SocialCentre": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/SocialClub": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Solarium": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Spa": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Tanning": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Theatre": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/YouthCentre": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/YouthClub": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/ZooShop": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Bingo": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Common": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Hackerspace": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/HotSpring": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/MiniatureGolf": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/PointOfInterest": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/SailingClub": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/ThemePark": 
			flag = "entertainment";
			break;
		case "http://linkedgeodata.org/ontology/Zoo": 
			flag = "entertainment";
			break;
			
		/*Outdoors*/
		case "http://linkedgeodata.org/ontology/Bench": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/BoatRental": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/BicycleRental": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/CampingOffice": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Campsite": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/CampSite": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/HuntingStand": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Park": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/ParkBench": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Picknick": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/PicnicSite": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/PicnicTable": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Playground": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/SwimmingPool": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Beach": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/BirdHide": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/DogPark": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Fishing": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/WaterPark": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/SkatePark": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/NatureReserve": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Marina": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Garden": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Slipway": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/NaturalThing": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/NationalPark": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/NationalForest": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/ProtectedArea": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/Basin": 
			flag = "outdoors";
			break;
		case "http://linkedgeodata.org/ontology/LandusePark": 
			flag = "outdoors";
			break;
			
		/*Food*/
		case "http://linkedgeodata.org/ontology/Bar": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Barbeque": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Bbq": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Cafe": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/CoffeeShop": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Deli": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Delicatessen": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/FastFood": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Fish": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Bakery": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Butcher": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Butchers": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Cheese": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Chocolate": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Dairy": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Fishmonger": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Food": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/FoodCourt": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Fruit": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/FrozenFoodShop": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Greengrocer": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Groceries": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Grocery": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/HealthFood": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/IceCream": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/IceCreamShop": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Kiosk": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Meat": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Pastry": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Patisserie": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Sweets": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/TakeAway": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Tea": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Wine": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/Winery": 
			flag = "food";
			break;
		case "http://linkedgeodata.org/ontology/BeachResort": 
			flag = "food";
			break;
		
		/*Nightlife*/
		case "http://linkedgeodata.org/ontology/Biergarten": 
			flag = "nightlife";
			break;
		case "http://linkedgeodata.org/ontology/Nightclub": 
			flag = "nightlife";
			break;
		case "http://linkedgeodata.org/ontology/Stripclub": 
			flag = "nightlife";
			break;
		case "http://linkedgeodata.org/ontology/DeadPub": 
			flag = "nightlife";
			break;
		case "http://linkedgeodata.org/ontology/Pub": 
			flag = "nightlife";
			break;
		case "http://linkedgeodata.org/ontology/Dance": 
			flag = "nightlife";
			break;
			
		/*Shop*/
		case "http://linkedgeodata.org/ontology/Appliance": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AdultShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AlcoholShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AnimalShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AnimalsShop": 
			flag = "shop";
			break;			
		case "http://linkedgeodata.org/ontology/AnimeShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AntiqueShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AntiquesShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AntiquitiesShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Apparel": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/ArtShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/ArtSupplies": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AudioVideoShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AutoPartsShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/AutomotiveShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BabyGoodsShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BabyShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BagsShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Barber": 
			flag = "shop";
			break;			
		case "http://linkedgeodata.org/ontology/BathroomFurnishingShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BeautyShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BedShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BeverageMarket": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BicycleShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Blacksmith": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BookShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BookmakerShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BookmakersShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/BooksShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Boutique": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/CameraShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/CandyShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/CarParts": 
			flag = "shop";
			break;			
		case "http://linkedgeodata.org/ontology/CarRepairShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/CarRental": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/CarShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/CardsShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Carpet": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Carpets": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Centre": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Ceramics": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Chandler": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/CharityShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Clockmaker": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Clothes": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Clothing": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Confectionery": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/ConstructionShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Copyshop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Cosmetics": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Decoration": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/DepartmentStore": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Discount": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Dressmaker": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/DrivingSchoolShop": 
			flag = "shop";
			break;			
		case "http://linkedgeodata.org/ontology/Drugstore": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Electronics": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Fabric": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Fabrics": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Fairtrade": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/FarmShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Fashion": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/FishingShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/FitnessShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Florist": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/FloristShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Furniture": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Games": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/GardenCentre": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/GardenCenter": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/GardenShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Glass": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Goldsmith": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/GymShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Haberdashery": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Hairdresser": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/HairdresserShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Handicraft": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Hardware": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Housewares": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Interiors": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Jewelers": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Jeweller": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Jewelry": 
			flag = "shop";
			break;			
		case "http://linkedgeodata.org/ontology/KitchenShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Leather": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Lighting": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Lingerie": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Locksmith": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Mall": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Market": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Marketplace": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Mattress": 
			flag = "shop";
			break;			
		case "http://linkedgeodata.org/ontology/Minimarket": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Mobile": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/MobilePhone": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/MobileTelephony": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Motorbike": 
			flag = "shop";
			break;			
		case "http://linkedgeodata.org/ontology/Motorcycle": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/MusicalInstruments": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/OfficeShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/OfficeSupplies": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/OpticianShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/OtherShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Outlet": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Pawnshop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Perfume": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Perfumery": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Pet": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/PetFood": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/PetShop": 
			flag = "shop";
			break;
			
		case "http://linkedgeodata.org/ontology/PetSupplies": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/PetSupply": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Pets": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Pharmacy": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Phone": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/PhoneShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Pottery": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/PublicMarket": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/ScubaDivingShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Shoemaker": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Shoes": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Shopping": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/ShoppingCenter": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/ShoppingCentre": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Shops": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Souvenir": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Souvenirs": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Stonemason": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Supermarket": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Tailor": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Tattoo": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Technology": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Telecommunication": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/TelephoneShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Textiles": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Tinsmith": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Tobacco": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/TouristShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Toys": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/UnknownShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/VideoGames": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Watches": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/Watchmaker": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/WineryShop": 
			flag = "shop";
			break;
		case "http://linkedgeodata.org/ontology/WoodShop": 
			flag = "shop";
			break;
		
		/*Sport*/
		case "http://linkedgeodata.org/ontology/DiveCenter": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/DiveCentre": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/Gym": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/SkiRental": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/SkiSchool": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/SnowPark": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/Sport": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/Sports": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/SportShop": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/SportCentre": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/Fitness": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/Fitness+trail": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/FitnessCentre": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/GolfCourse": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/Pitch": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/HorseRiding": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/SportsCentre": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/Stadium": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/Track": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/IceRink": 
			flag = "sport";
			break;
		case "http://linkedgeodata.org/ontology/SportThing": 
			flag = "sport";
			break;
			
		default : 
			flag = "generalThing";
	}
	
	return flag;
}