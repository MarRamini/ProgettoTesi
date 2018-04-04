/**
 * define which linkedgeodata ontology belongs to which category of revenues built in the application
 */

function defineMuseumClasses(){
	var museumClasses = 
		"(http://linkedgeodata.org/ontology/HistoricMuseum)" +
		"(http://linkedgeodata.org/ontology/Museum)" +
		"(http://linkedgeodata.org/ontology/ArchaeologicalSite)" +
		"(http://linkedgeodata.org/ontology/Battlefield)" +
		"(http://linkedgeodata.org/ontology/PalaeontologicalSite)";
	return museumClasses;
}

function defineHistoricClasses(){
	var historicClasses = 
		"(http://linkedgeodata.org/ontology/Fortress)" + 
		"(http://linkedgeodata.org/ontology/Fountain)" +
		"(http://linkedgeodata.org/ontology/Statue)" +
		"(http://linkedgeodata.org/ontology/Castle)" +
		"(http://linkedgeodata.org/ontology/CityGate)" +
		"(http://linkedgeodata.org/ontology/Fort)" +
		"(http://linkedgeodata.org/ontology/Heritage)" +
		"(http://linkedgeodata.org/ontology/HistoricBuilding)" +
		"(http://linkedgeodata.org/ontology/HistoricFountain)" +
		"(http://linkedgeodata.org/ontology/HistoricHouse)" +
		"(http://linkedgeodata.org/ontology/HistoricMarker)" +
		"(http://linkedgeodata.org/ontology/HistoricMilestone)" +
		"(http://linkedgeodata.org/ontology/HistoricMine)" +
		"(http://linkedgeodata.org/ontology/HistoricPointOfInterest)" +
		"(http://linkedgeodata.org/ontology/HistoricStatue)" +
		"(http://linkedgeodata.org/ontology/HistoricTower)" +
		"(http://linkedgeodata.org/ontology/HistoricWell)" +
		"(http://linkedgeodata.org/ontology/Icon)" +
		"(http://linkedgeodata.org/ontology/Lavoir)" +
		"(http://linkedgeodata.org/ontology/Manor)" +
		"(http://linkedgeodata.org/ontology/Memorial)" +
		"(http://linkedgeodata.org/ontology/Mill)" +
		"(http://linkedgeodata.org/ontology/MineShaft)" +
		"(http://linkedgeodata.org/ontology/Monument)" +
		"(http://linkedgeodata.org/ontology/Palace)" +
		"(http://linkedgeodata.org/ontology/ProtectedBuilding)" +
		"(http://linkedgeodata.org/ontology/Ruins)" +
		"(http://linkedgeodata.org/ontology/RuneStone)" +
		"(http://linkedgeodata.org/ontology/SaintsCross)" +
		"(http://linkedgeodata.org/ontology/StoneCircle)" +
		"(http://linkedgeodata.org/ontology/Tombstone)" +
		"(http://linkedgeodata.org/ontology/Tumulus)" +
		"(http://linkedgeodata.org/ontology/UNESCOWorldHeritage)" +
		"(http://linkedgeodata.org/ontology/WaysideCross)" +
		"(http://linkedgeodata.org/ontology/WaysideShrine)" +
		"(http://linkedgeodata.org/ontology/Wreck)" +
		"(http://linkedgeodata.org/ontology/Cairn)" +
		"(http://linkedgeodata.org/ontology/ManMadeStatue)";
	return historicClasses;
}
		
function defineChurchClasses(){
	var churchClasses = 
		"(http://linkedgeodata.org/ontology/BuildingChapel)" + 
		"(http://linkedgeodata.org/ontology/BuildingChurch)" + 
		"(http://linkedgeodata.org/ontology/BuildingMonastery)" + 
		"(http://linkedgeodata.org/ontology/Chapel)" + 
		"(http://linkedgeodata.org/ontology/Church)" + 
		"(http://linkedgeodata.org/ontology/ChurchHall)" + 
		"(http://linkedgeodata.org/ontology/Monastery)" +
		"(http://linkedgeodata.org/ontology/PlaceOfWorship)" +
		"(http://linkedgeodata.org/ontology/Abbey)" +
		"(http://linkedgeodata.org/ontology/HistoricChapel)" +
		"(http://linkedgeodata.org/ontology/HistoricChurch)" +
		"(http://linkedgeodata.org/ontology/HistoricMonastery)" +
		"(http://linkedgeodata.org/ontology/WaysideChapel)";
	return churchClasses;
}

function defineArtsClasses(){
	var artsClasses = 
		"(http://linkedgeodata.org/ontology/ArtGallery)" + 
		"(http://linkedgeodata.org/ontology/ArtGalleryShop)" + 
		"(http://linkedgeodata.org/ontology/ArtsCentre)" + 
		"(http://linkedgeodata.org/ontology/Artwork)" +
		"(http://linkedgeodata.org/ontology/FolkArt)" + 
		"(http://linkedgeodata.org/ontology/Gallery)" + 
		"(http://linkedgeodata.org/ontology/GalleryShop)" +
		"(http://linkedgeodata.org/ontology/Sculptor)";
	return artsClasses;
}

function defineEntertainmentClasses(){
	var entertainmentClasses = 
		"(http://linkedgeodata.org/ontology/Bandstand)" + 
		"(http://linkedgeodata.org/ontology/Betting)" + 
		"(http://linkedgeodata.org/ontology/Brothel)" + 
		"(http://linkedgeodata.org/ontology/Casino)" + 
		"(http://linkedgeodata.org/ontology/Cinema)" + 
		"(http://linkedgeodata.org/ontology/Club)" + 
		"(http://linkedgeodata.org/ontology/ClubHouse)" + 
		"(http://linkedgeodata.org/ontology/Clubhouse)" + 
		"(http://linkedgeodata.org/ontology/ConcertHall)" +		
		"(http://linkedgeodata.org/ontology/Gambling)" + 
		"(http://linkedgeodata.org/ontology/GamblingShop)" + 
		"(http://linkedgeodata.org/ontology/InternetCafe)" +
		"(http://linkedgeodata.org/ontology/LicensedClub)" + 
		"(http://linkedgeodata.org/ontology/Music)" + 
		"(http://linkedgeodata.org/ontology/MusicVenue)" +
		"(http://linkedgeodata.org/ontology/Salon)" +
		"(http://linkedgeodata.org/ontology/Sauna)" +
		"(http://linkedgeodata.org/ontology/SocialCentre)" +
		"(http://linkedgeodata.org/ontology/SocialClub)" +
		"(http://linkedgeodata.org/ontology/Solarium)" +
		"(http://linkedgeodata.org/ontology/Spa)" +
		"(http://linkedgeodata.org/ontology/Tanning)" +
		"(http://linkedgeodata.org/ontology/Theatre)" +
		"(http://linkedgeodata.org/ontology/YouthCentre)" +
		"(http://linkedgeodata.org/ontology/YouthClub)" +
		"(http://linkedgeodata.org/ontology/ZooShop)"
		"(http://linkedgeodata.org/ontology/Bingo)" +
		"(http://linkedgeodata.org/ontology/Common)" +
		"(http://linkedgeodata.org/ontology/Hackerspace)" +	
		"(http://linkedgeodata.org/ontology/HotSpring)" +  	
		"(http://linkedgeodata.org/ontology/MiniatureGolf)" + 	
		"(http://linkedgeodata.org/ontology/PointOfInterest)" + 	
		"(http://linkedgeodata.org/ontology/SailingClub)" +
		"(http://linkedgeodata.org/ontology/ThemePark)" +
		"(http://linkedgeodata.org/ontology/Zoo)";
	return entertainmentClasses;
}

function defineOutdoorsClasses(){
	var outdoorsClasses = 
		"(http://linkedgeodata.org/ontology/Bench)" + 
		"(http://linkedgeodata.org/ontology/BoatRental)"  + 
		"(http://linkedgeodata.org/ontology/BicycleRental)" + 
		"(http://linkedgeodata.org/ontology/CampingOffice)" + 
		"(http://linkedgeodata.org/ontology/Campsite)" +
		"(http://linkedgeodata.org/ontology/CampSite)" +
		"(http://linkedgeodata.org/ontology/HuntingStand)" + 
		"(http://linkedgeodata.org/ontology/Park)" + 
		"(http://linkedgeodata.org/ontology/ParkBench)" +
		"(http://linkedgeodata.org/ontology/Picknick)" +
		"(http://linkedgeodata.org/ontology/PicnicSite)" +
		"(http://linkedgeodata.org/ontology/PicnicTable)" +
		"(http://linkedgeodata.org/ontology/Playground)" +
		"(http://linkedgeodata.org/ontology/SwimmingPool)" +
		"(http://linkedgeodata.org/ontology/Beach)" +
		"(http://linkedgeodata.org/ontology/BirdHide)" +
		"(http://linkedgeodata.org/ontology/DogPark)" + 	
		"(http://linkedgeodata.org/ontology/Fishing)" +
		"(http://linkedgeodata.org/ontology/WaterPark)" +
		"(http://linkedgeodata.org/ontology/SkatePark)" +
		"(http://linkedgeodata.org/ontology/NatureReserve)" +
		"(http://linkedgeodata.org/ontology/Marina)" +
		"(http://linkedgeodata.org/ontology/Garden)" + 
		"(http://linkedgeodata.org/ontology/Slipway)" +
		"(http://linkedgeodata.org/ontology/NaturalThing)" +
		"(http://linkedgeodata.org/ontology/NationalPark)" +
		"(http://linkedgeodata.org/ontology/NationalForest)" +
		"(http://linkedgeodata.org/ontology/ProtectedArea)" +
		"(http://linkedgeodata.org/ontology/Basin)" +
		"(http://linkedgeodata.org/ontology/LandusePark)";
	return outdoorsClasses;
}

function defineFoodClasses(){
	var FoodClasses = 
		"(http://linkedgeodata.org/ontology/Bar)" + 
		"(http://linkedgeodata.org/ontology/Barbeque)" + 
		"(http://linkedgeodata.org/ontology/Bbq)" + 
		"(http://linkedgeodata.org/ontology/Cafe)" + 
		"(http://linkedgeodata.org/ontology/CoffeeShop)" + 
		"(http://linkedgeodata.org/ontology/Deli)" + 
		"(http://linkedgeodata.org/ontology/Delicatessen)" + 
		"(http://linkedgeodata.org/ontology/FastFood)" + 
		"(http://linkedgeodata.org/ontology/Fish)"  + 
		"(http://linkedgeodata.org/ontology/Bakery)" + 
		"(http://linkedgeodata.org/ontology/Butcher)" + 
		"(http://linkedgeodata.org/ontology/Butchers)" + 
		"(http://linkedgeodata.org/ontology/Cheese)" + 
		"(http://linkedgeodata.org/ontology/Chocolate)"  +
		"(http://linkedgeodata.org/ontology/Dairy)"  + 
		"(http://linkedgeodata.org/ontology/Fishmonger)" +
		"(http://linkedgeodata.org/ontology/Food)" + 
		"(http://linkedgeodata.org/ontology/FoodCourt)" + 
		"(http://linkedgeodata.org/ontology/Fruit)"  + 
		"(http://linkedgeodata.org/ontology/FrozenFoodShop)" + 
		"(http://linkedgeodata.org/ontology/Greengrocer)" +
		"(http://linkedgeodata.org/ontology/Groceries)" + 
		"(http://linkedgeodata.org/ontology/Grocery)" + 
		"(http://linkedgeodata.org/ontology/HealthFood)" + 
		"(http://linkedgeodata.org/ontology/IceCream)" + 
		"(http://linkedgeodata.org/ontology/IceCreamShop)" + 
		"(http://linkedgeodata.org/ontology/Kiosk)" + 
		"(http://linkedgeodata.org/ontology/Meat)" +
		"(http://linkedgeodata.org/ontology/Pastry)" + 
		"(http://linkedgeodata.org/ontology/Patisserie)" +
		"(http://linkedgeodata.org/ontology/Sweets)" +
		"(http://linkedgeodata.org/ontology/TakeAway)" +
		"(http://linkedgeodata.org/ontology/Tea)" +
		"(http://linkedgeodata.org/ontology/Wine)" +
		"(http://linkedgeodata.org/ontology/Winery)" +
		"(http://linkedgeodata.org/ontology/BeachResort)";	
	return FoodClasses;
}

function defineNightlifeClasses(){
	var nightlifeClasses = 
		"(http://linkedgeodata.org/ontology/Biergarten)" + 
		"(http://linkedgeodata.org/ontology/Nightclub)" +
		"(http://linkedgeodata.org/ontology/Stripclub)" +
		"(http://linkedgeodata.org/ontology/DeadPub)" +
		"(http://linkedgeodata.org/ontology/Pub)" +
		"(http://linkedgeodata.org/ontology/Dance)";
	return nightlifeClasses;
}

function defineShopClasses(){
	var shopClasses = 
		"(http://linkedgeodata.org/ontology/AdultShop)" + 
		"(http://linkedgeodata.org/ontology/AlcoholShop)" +
		"(http://linkedgeodata.org/ontology/AnimalShop)" + 
		"(http://linkedgeodata.org/ontology/AnimalsShop)" + 
		"(http://linkedgeodata.org/ontology/AnimeShop)" + 
		"(http://linkedgeodata.org/ontology/AntiqueShop)" + 
		"(http://linkedgeodata.org/ontology/AntiquesShop)" + 
		"(http://linkedgeodata.org/ontology/AntiquitiesShop)" + 
		"(http://linkedgeodata.org/ontology/Apparel)" + 
		"(http://linkedgeodata.org/ontology/Appliance)" + 
		"(http://linkedgeodata.org/ontology/ArtShop)" + 
		"(http://linkedgeodata.org/ontology/ArtSupplies)" + 
		"(http://linkedgeodata.org/ontology/AudioVideoShop)" + 
		"(http://linkedgeodata.org/ontology/AutoPartsShop)" + 
		"(http://linkedgeodata.org/ontology/AutomotiveShop)" + 
		"(http://linkedgeodata.org/ontology/BabyGoodsShop)" + 
		"(http://linkedgeodata.org/ontology/BabyShop)" + 
		"(http://linkedgeodata.org/ontology/BagsShop)" + 
		"(http://linkedgeodata.org/ontology/Barber)" + 
		"(http://linkedgeodata.org/ontology/BathroomFurnishingShop)" + 
		"(http://linkedgeodata.org/ontology/BeautyShop)" + 
		"(http://linkedgeodata.org/ontology/BedShop)" + 
		"(http://linkedgeodata.org/ontology/BeverageMarket)" + 
		"(http://linkedgeodata.org/ontology/BicycleShop)" + 
		"(http://linkedgeodata.org/ontology/Blacksmith)" + 
		"(http://linkedgeodata.org/ontology/BookShop)" + 
		"(http://linkedgeodata.org/ontology/BookmakerShop)" + 
		"(http://linkedgeodata.org/ontology/BookmakersShop)" + 
		"(http://linkedgeodata.org/ontology/BooksShop)" + 
		"(http://linkedgeodata.org/ontology/Boutique)" + 
		"(http://linkedgeodata.org/ontology/CameraShop)" + 
		"(http://linkedgeodata.org/ontology/CandyShop)" + 
		"(http://linkedgeodata.org/ontology/CarParts)" + 
		"(http://linkedgeodata.org/ontology/CarRepairShop)" + 
		"(http://linkedgeodata.org/ontology/CarRental)" + 
		"(http://linkedgeodata.org/ontology/CarShop)" + 
		"(http://linkedgeodata.org/ontology/CardsShop)" + 
		"(http://linkedgeodata.org/ontology/Carpet)" + 
		"(http://linkedgeodata.org/ontology/Carpets)" + 
		"(http://linkedgeodata.org/ontology/Centre)" + 
		"(http://linkedgeodata.org/ontology/Ceramics)" + 
		"(http://linkedgeodata.org/ontology/Chandler)" + 
		"(http://linkedgeodata.org/ontology/CharityShop)"  + 
		"(http://linkedgeodata.org/ontology/Clockmaker)" + 
		"(http://linkedgeodata.org/ontology/Clothes)" + 
		"(http://linkedgeodata.org/ontology/Clothing)" + 
		"(http://linkedgeodata.org/ontology/Confectionery)" + 
		"(http://linkedgeodata.org/ontology/ConstructionShop)" + 
		"(http://linkedgeodata.org/ontology/Copyshop)" + 
		"(http://linkedgeodata.org/ontology/Cosmetics)"+ 
		"(http://linkedgeodata.org/ontology/Decoration)" + 
		"(http://linkedgeodata.org/ontology/DepartmentStore)" + 
		"(http://linkedgeodata.org/ontology/Discount)" + 
		"(http://linkedgeodata.org/ontology/Dressmaker)" + 
		"(http://linkedgeodata.org/ontology/DrivingSchoolShop)" + 
		"(http://linkedgeodata.org/ontology/Drugstore)" + 
		"(http://linkedgeodata.org/ontology/Electronics)" + 
		"(http://linkedgeodata.org/ontology/Fabric)" + 
		"(http://linkedgeodata.org/ontology/Fabrics)" + 
		"(http://linkedgeodata.org/ontology/Fairtrade)" + 
		"(http://linkedgeodata.org/ontology/FarmShop)" + 
		"(http://linkedgeodata.org/ontology/Fashion)" + 
		"(http://linkedgeodata.org/ontology/FishingShop)" + 
		"(http://linkedgeodata.org/ontology/FitnessShop)" + 
		"(http://linkedgeodata.org/ontology/Florist)" + 
		"(http://linkedgeodata.org/ontology/FloristShop)" + 
		"(http://linkedgeodata.org/ontology/Furniture)" + 
		"(http://linkedgeodata.org/ontology/Games)" + 
		"(http://linkedgeodata.org/ontology/GardenCentre)" + 
		"(http://linkedgeodata.org/ontology/GardenCenter)" + 
		"(http://linkedgeodata.org/ontology/GardenShop)" + 
		"(http://linkedgeodata.org/ontology/Glass)" + 
		"(http://linkedgeodata.org/ontology/Goldsmith)" + 
		"(http://linkedgeodata.org/ontology/GymShop)" + 
		"(http://linkedgeodata.org/ontology/Haberdashery)" + 
		"(http://linkedgeodata.org/ontology/Hairdresser)" + 
		"(http://linkedgeodata.org/ontology/HairdresserShop)" + 
		"(http://linkedgeodata.org/ontology/Handicraft)" + 
		"(http://linkedgeodata.org/ontology/Hardware)" + 
		"(http://linkedgeodata.org/ontology/Housewares)" + 
		"(http://linkedgeodata.org/ontology/Interiors)" + 
		"(http://linkedgeodata.org/ontology/Jewelers)" + 
		"(http://linkedgeodata.org/ontology/Jeweller)" + 
		"(http://linkedgeodata.org/ontology/Jewelry)" + 
		"(http://linkedgeodata.org/ontology/KitchenShop)" + 
		"(http://linkedgeodata.org/ontology/Leather)" + 
		"(http://linkedgeodata.org/ontology/Lighting)" +
		"(http://linkedgeodata.org/ontology/Lingerie)" + 
		"(http://linkedgeodata.org/ontology/Locksmith)" + 
		"(http://linkedgeodata.org/ontology/Mall)" + 
		"(http://linkedgeodata.org/ontology/Market)" + 
		"(http://linkedgeodata.org/ontology/Marketplace)" + 
		"(http://linkedgeodata.org/ontology/Mattress)" + 
		"(http://linkedgeodata.org/ontology/Minimarket)" + 
		"(http://linkedgeodata.org/ontology/Mobile)" + 
		"(http://linkedgeodata.org/ontology/MobilePhone)" + 
		"(http://linkedgeodata.org/ontology/MobileTelephony)" + 
		"(http://linkedgeodata.org/ontology/Motorbike)" + 
		"(http://linkedgeodata.org/ontology/Motorcycle)" + 
		"(http://linkedgeodata.org/ontology/MusicalInstruments)" + 
		"8http://linkedgeodata.org/ontology/OfficeShop)" + 
		"(http://linkedgeodata.org/ontology/OfficeSupplies)" + 
		"(http://linkedgeodata.org/ontology/OpticianShop)" +
		"(http://linkedgeodata.org/ontology/OtherShop)" + 
		"(http://linkedgeodata.org/ontology/Outlet)" +
		"(http://linkedgeodata.org/ontology/Pawnshop)" + 
		"(http://linkedgeodata.org/ontology/Perfume)" +
		"(http://linkedgeodata.org/ontology/Perfumery)" +
		"(http://linkedgeodata.org/ontology/Pet)" +
		"(http://linkedgeodata.org/ontology/PetFood)" +
		"(http://linkedgeodata.org/ontology/PetShop)" +
		"(http://linkedgeodata.org/ontology/PetSupplies)" +
		"(http://linkedgeodata.org/ontology/PetSupply)" +
		"(http://linkedgeodata.org/ontology/Pets)" +
		"(http://linkedgeodata.org/ontology/Pharmacy)" +
		"(http://linkedgeodata.org/ontology/Phone)" +
		"(http://linkedgeodata.org/ontology/PhoneShop)" +
		"(http://linkedgeodata.org/ontology/Pottery)" +
		"(http://linkedgeodata.org/ontology/PublicMarket)" +
		"(http://linkedgeodata.org/ontology/ScubaDivingShop)" +
		"(http://linkedgeodata.org/ontology/Shoemaker)" +
		"(http://linkedgeodata.org/ontology/Shoes)" +
		"(http://linkedgeodata.org/ontology/Shopping)" +
		"(http://linkedgeodata.org/ontology/ShoppingCenter)" +
		"(http://linkedgeodata.org/ontology/ShoppingCentre)" +
		"(http://linkedgeodata.org/ontology/Shops)" +
		"(http://linkedgeodata.org/ontology/Souvenir)" +
		"(http://linkedgeodata.org/ontology/Souvenirs)" +
		"(http://linkedgeodata.org/ontology/Stonemason)" +
		"(http://linkedgeodata.org/ontology/Supermarket)" +
		"(http://linkedgeodata.org/ontology/Tailor)" +
		"(http://linkedgeodata.org/ontology/Tattoo)" +
		"(http://linkedgeodata.org/ontology/Technology)" +
		"(http://linkedgeodata.org/ontology/Telecommunication)" +
		"(http://linkedgeodata.org/ontology/TelephoneShop)" +
		"(http://linkedgeodata.org/ontology/Textiles)"
		"(http://linkedgeodata.org/ontology/Tinsmith)"
		"(http://linkedgeodata.org/ontology/Tobacco)"
		"(http://linkedgeodata.org/ontology/TouristShop)" +
		"(http://linkedgeodata.org/ontology/Toys)"
		"(http://linkedgeodata.org/ontology/UnknownShop)" +
		"(http://linkedgeodata.org/ontology/VideoGames)" +
		"(http://linkedgeodata.org/ontology/Watches)" +
		"(http://linkedgeodata.org/ontology/Watchmaker)" +
		"(http://linkedgeodata.org/ontology/WineryShop)" +
		"(http://linkedgeodata.org/ontology/WoodShop)";	
	return shopClasses;
}

function defineSportClasses(){
	var sportClasses = 
		"(http://linkedgeodata.org/ontology/DiveCenter)" + 
		"(http://linkedgeodata.org/ontology/DiveCentre)" + 
		"(http://linkedgeodata.org/ontology/Gym)" +
		"(http://linkedgeodata.org/ontology/SkiRental)" +
		"(http://linkedgeodata.org/ontology/SkiSchool)" +
		"(http://linkedgeodata.org/ontology/SnowPark)" +
		"(http://linkedgeodata.org/ontology/Sport)" +
		"(http://linkedgeodata.org/ontology/Sports)" +
		"(http://linkedgeodata.org/ontology/SportShop)" +
		"(http://linkedgeodata.org/ontology/SportCentre)" +
		"(http://linkedgeodata.org/ontology/Fitness)" +
		"(http://linkedgeodata.org/ontology/Fitness+trail)" +
		"(http://linkedgeodata.org/ontology/FitnessCentre)" + 
		"(http://linkedgeodata.org/ontology/GolfCourse)" +
		"(http://linkedgeodata.org/ontology/Pitch)" +
		"(http://linkedgeodata.org/ontology/HorseRiding)" + 	
		"(http://linkedgeodata.org/ontology/SportsCentre)" + 
		"(http://linkedgeodata.org/ontology/Stadium)" + 	
		"(http://linkedgeodata.org/ontology/Track)"
		"(http://linkedgeodata.org/ontology/IceRink)"
		"(http://linkedgeodata.org/ontology/SportThing)";
	return sportClasses;
}