var express = require('express');
var _ = require('lodash');


var app = express();

var beers = [
    {
        id: 1,
        name: "(512) ALT",
        description: "A German-style amber ale that is fermented cooler than typical ales and cold conditioned like a lager. ALT means 'old' in German and refers to a beer style made using ale yeast after many German brewers had switched to newly discovered lager yeast. This ale has a very smooth, yet pronounced, hop bitterness with a malty backbone and a characteristic German yeast character. Made with 98% organic two-row and Munich malts and US noble hops.",
        abv: 6,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "(512) Brewing Company",
        imageUrl: "img/beers/(512) ALT.jpg"
    },
    {
        id: 2,
        name: "(512) Bruin",
        description: "At once cuddly and ferocious, it combines a smooth, rich maltiness and mahogany color with a solid hop backbone and stealthy 7.6% alcohol. Made with organic two-row and Munich malts, plus chocolate and crystal malts, domestic hops, and a touch of molasses, this brew has notes of raisins, dark sugars, and cocoa, and pairs perfectly with food and the crisp fall air.",
        abv: 7.6,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "(512) Brewing Company",
        imageUrl: "img/beers/(512) Bruin.jpg"
    },
    {
        id: 4,
        name: "(512) Pecan Porter",
        description: "Nearly black in color, it is made with organic US two-row and crystal malts along with Baird's chocolate and black malts. Its full body and malty sweetness are balanced with subtle pecan aroma and flavor from locally grown pecans.",
        abv: 6.8,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "(512) Brewing Company",
        imageUrl: "img/beers/(512) Pecan Porter.jpg"
    },
    {
        id: 3,
        name: "(512) ONE",
        description: "This first anniversary release is a Belgian-style strong ale that is amber in color, with a light to medium body. Subtle malt sweetness is balanced with noticeable hop flavor, light raisin and mildly spicy, cake-like flavors, and is finished with local wildflower honey aromas. Made with 80% organic malted barley, Belgian specialty grains, Forbidden Fruit yeast, domestic hops and Round Rock local wildflower honey, this beer is deceptively high in alcohol.",
        abv: 8,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "(512) Brewing Company",
        imageUrl: "img/beers/(512) ONE.jpg"
    },
    {
        id: 5,
        name: "(512) TWO",
        description: "This second anniversary release is a Double IPA heavily hopped with over 4 lbs/bbl of Simcoe, Magnum, Nugget and Ahtanum. This is a big, malty ale with delicate hop and rich malt aroma, complex hop flavor and sustained smooth hop bitterness. Hops are added from beginning to end during the brewing process and, like most (512) ales, this one is made using over 80% USDA certified organic ingredients.",
        abv: 9,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "(512) Brewing Company",
        imageUrl: "img/beers/(512) TWO.jpg"
    },
    {
        id: 6,
        name: "(512) Whiskey Barrel Aged Double Pecan Porter",
        description: "A robust porter accented by locally grown roasted pecans and subtly enhanced by aging in recently emptied oak whiskey barrels. For the first ever bottling, only one 200L barrel was bottled. Notes of chocolate, coffee and pecan marry with the subtle flavors of vanilla and whiskey to make this a wonderful winter warmer worth sharing and savoring.",
        abv: 8.2,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "(512) Brewing Company",
        imageUrl: "img/beers/(512) Whiskey Barrel Aged Double Pecan Porter.jpg"
    },
    {
        id: 7,
        name: "Back in Black",
        description: "Brewed like an American IPA but with the addition of rich, dark malts, this beer has all the flavor and hop character you expect with a smooth, mellow finish.",
        abv: 6.8,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "21st Amendment Brewing",
        imageUrl: "img/beers/Back in Black.jpg"
    },
    {
        id: 8,
        name: "Brew Free! or Die",
        description: "This aromatic golden IPA starts with a sucker punch of six different hops to the nose, quickly balanced by a solid malt backbone.",
        abv: 7,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "21st Amendment Brewing",
        imageUrl: "img/beers/Brew Free! or Die.jpg"
    },
    {
        id: 9,
        name: "Fireside Chat",
        description: "Brewed like a classic, warming Strong Ale but with a subtle blend of hand-selected spices for just the right festive flair.",
        abv: 7.9,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "21st Amendment Brewing",
        imageUrl: "img/beers/Fireside Chat.jpg"
    },
    {
        id: 10,
        name: "Hell or High Watermelon",
        description: "Starting with a classic American wheat beer, it undergoes a traditional secondary fermentation using fresh watermelon. A straw-colored, refreshing beer with a kiss of watermelon aroma and flavor.",
        abv: 4.9,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "21st Amendment Brewing",
        imageUrl: "img/beers/Hell or High Watermelon.jpg"
    },
    {
        id: 11,
        name: "Monk's Blood",
        description: "The founders Nico Freccia and Shaun O'Sullivan traveled to Belgium to develop the recipe for this special beer, visiting small, traditional breweries in the hop fields of west Flanders, not far from the famous Trappist abbey of Westvletren. It is designed to pair beautifully with rich winter stews, creamy cheeses, unctuous desserts or just by itself, in a Belgian tulip glass, with a good book by the fire.",
        abv: 8.3,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "21st Amendment Brewing",
        imageUrl: "img/beers/Monk's Blood.jpg"
    },
    {
        id: 12,
        name: "Leffe Dark",
        description: "A dark beer that is a highly fermented beer to be savoured. Ingredients such as roasted malt, corn, water, hops and yeast gives it its a deep autumnal brown color. The aroma has a hint of ripe apple. At normal cellar temperature, the taste develops from a pleasing sweet-fruity to brown sugar, with a hint of caramel and butter candy, to an aftertaste that is spicy and dry.",
        abv: 6.5,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abbaye de Leffe",
        imageUrl: "img/beers/Leffe Dark.jpg"
    },
    {
        id: 13,
        name: "Leffe Blonde",
        description: "A blonde beer is a highly fermented beer to be savoured. Ingredients such as light malt, corn, water, hops and yeast gives it a bright golden colour with dazzling reflections. The taste is full, sweet and fruity, with a hint of bitter orange, and the after-taste is powerful and surprising.",
        abv: 6.6,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abbaye de Leffe",
        imageUrl: "img/beers/Leffe Blonde.jpg"
    },
    {
        id: 14,
        name: "Leffe Triple",
        description: "Ingredients such as malt, corn, water, hops and yeast gives it its golden brown colour. It can reach 8.4 ABV after refermentation in the bottle. The taste is a rich bouquet with a fresh hint of lemon; medium to full in the mouth, fruity and full, with a deliciously aromatic after-taste.",
        abv: 7,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abbaye de Leffe",
        imageUrl: "img/beers/Leffe Triple.jpg"
    },
    {
        id: 15,
        name: "Leffe Radieuse",
        description: "Ingredients such as dark malt, corn, water, hops, spices, and yeast gives it its bronze colour. It has the taste of a rich and earthy bouquet with a creamy head. The taste is powerful where the fruity, the sweet, a hint of roasting and the dryness of the hops are apparent. The after-taste is long and warm.",
        abv: 8.2,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abbaye de Leffe",
        imageUrl: "img/beers/Leffe Radieuse.jpg"
    },
    {
        id: 16,
        name: "Leffe 9°",
        description: "A high fermentation beer with a deep golden colour. Its wholesome taste and its rich flavour make it a beer full of character.",
        abv: 9,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abbaye de Leffe",
        imageUrl: "img/beers/Leffe 9°.jpg"
    },
    {
        id: 17,
        name: "Abbey Ale",
        description: "Abbey Ale honors the ancient tradition of monks who perfected the art of brewing beer to support the monastery and their 'liquid bread'. We offer up our support and thank them with a 25¢ donation to St. Joseph's Abbey with every bottle sold of this heavenly brew. Dark amber in color, the aroma of caramel, fruits and cloves invites you to contemplate the creamy head of this 'Dubbel' or double ale. Abita Abbey Ale is a malty brew, top-fermented and bottle aged to rapturous perfection. This ale pairs well with barbecue, meat stews or a nice thick steak. For dessert, try Abita Abbey Ale with milk chocolate or chocolate bread pudding. We suggest serving this brew at 46 degrees.",
        abv: 8,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Abbey Ale.jpg"
    },
    {
        id: 18,
        name: "Amber",
        description: "Amber is a Munich style lager brewed with crystal malt and Perle hops. It has a smooth, malty, slightly caramel flavor and a rich amber color. Abita Amber was the first beer offered by the brewery and continues to be our leading seller. Amber is Abita's most versatile beer for pairing with food. It has been voted 'best beer' in numerous New Orleans reader polls and is used frequently in recipes of great Louisiana chefs. Because of its smooth, malty flavor, try it with smoked sausages, Louisiana boudin, or even with caviar. It's great with crawfish and Cajun food. You might also enjoy it paired with a spicy gumbo or tomato-based pasta sauce. It goes well also with fried catfish dipped in a tart, lemony tartar sauce. Parmesan, Pecorino and Romano cheeses are good pairings with Abita Amber.",
        abv: 4.5,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Amber.jpg"
    },
    {
        id: 19,
        name: "Andygator",
        description: "Andygator, a creature of the swamp, is a unique high-gravity brew made with pale malt, German lager yeast, and German Perle hops. Unlike other high-gravity brews, Andygator is fermented to a dry finish with a slightly sweet flavor and subtle fruit aroma. Reaching an alcohol strength of 8% by volume, it is a Helles Dopplebock. You might find it goes well with fried foods. It pairs well with just about anything made with crawfish. Some like it with a robust sandwich! Andygator also is a good aperitif and easily pairs with gorgonzola and creamy blue cheeses. Because of the high alcohol content, be cautious–sip it for the most enjoyment.",
        abv: 8,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Andygator.bmp"
    },
    {
        id: 20,
        name: "Bock",
        description: "Bock (January – March) is the first of our seasonal brews. It is brewed with Perle hops and pale and caramel malts. Our Bock is similar to a German Maibock in its high malt content, full body and slightly higher alcohol content. Abita Bock is a very popular brew, especially during our Mardi Gras season. Gruyére, Emmental and Swiss are nice cheese choices with Bock. Great with roasted beef or pork. Try it with Mexican food too.",
        abv: 6.5,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Bock.jpg"
    },
    {
        id: 21,
        name: "Christmas Ale",
        description: "Christmas Ale (November – December) rounds out our calendar. Generally, this beer is a dark ale, however, the recipe changes each year, offering a unique product crafted with special care. Enjoy your holidays with Abita Christmas Ale. The spicy character is excellent with traditional holiday foods such as gingerbread or spiced nuts. Try some Blue cheese or a creamy Camembert with a Christmas Ale.",
        abv: 6.1,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Christmas Ale.JPG"
    },
    {
        id: 22,
        name: "Fall Fest",
        description: "Fall Fest (September – November) is a Marzen-style Octoberfest lager. It is brewed with German Haullertau hops and pale and crystal malts. The result is a full-bodied, malty beer with a beautiful amber color. Cheese pairings include Gruyère and Swiss-style cheeses.",
        abv: 5.4,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Fall Fest.jpg"
    },
    {
        id: 23,
        name: "Golden",
        description: "Golden is a crisp, clean continental lager. Just four ingredients are all it takes: American malt, Mt. Hood hops, German lager yeast and pure Abita Spring's water. As the name implies, Abita Golden has a brilliant gold color. Its flavor makes this light lager the perfect match for Louisiana Creole food. Both Abita Light and Abita Golden go well with just about anything. Try it with mild rice or pasta dishes, grilled vegetables, grilled chicken and fish, and even with something spicy like Louisiana boiled crawfish, shrimp and crabs. Goat cheeses like feta and chevre pair well with Abita Golden.",
        abv: 4.2,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Golden.JPG"
    },
    {
        id: 24,
        name: "Jockamo",
        description: "Jockamo is named for the tribes of dancing, singing, chanting 'Mardi Gras Indians'who have marched in New Orleans for over 250 years. When you hear the drums, join in the song...'Iko! Iko! Jockamo fe na ne'. Jockamo I.P.A. is a traditional India Pale Ale made with the best pale and light crystal malts that give the beer a copper color and malty flavor. This full-flavored beer is hopped and dry hopped liberally with Willamette and Columbus hops from the Pacific Northwest and has a 6.5% A.B.V. The spicy aroma of the hops contrasts nicely with the pleasant sweetness of the malts. Jockamo has a flavor that entices and excites the palate. The intense hop character adds more spice to the meal and makes it a perfect choice to team up with many spicy dishes. Cheddar and strong farmer cheeses stand up well to Jockamo's hoppy character. Jockamo goes well with game, grilled meats and Thai, or Mexican cuisine.",
        abv: 6.5,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Jockamo.jpg"
    },
    {
        id: 25,
        name: "Light",
        description: "Light is uniquely hand-crafted using 100% all natural ingredients: malted barley, the finest hops, German lager yeast and pristine Abita Springs water. The result is the smoothest, most flavorful light beer you will ever taste. Great with almost anything, it's an excellent choice for lighter foods and salads too. Try Abita Light with a sharp Cheddar Cheese.",
        abv: 4,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Light.jpg"
    },
    {
        id: 26,
        name: "Pecan",
        description: "Pecan Harvest Ale is made with real Louisiana pecans that have been toasted to perfection. That makes it something really special, because most beers with a nutty flavor or aroma aren't made with real nuts. The natural oils from the Louisiana pecans give the ale a light pecan finish and aroma. This ale is excellent served with both red meat, seafood, gouda cheese, and no surprise here, it's also great with nuts! Try Pecan Harvest with Gouda cheese.",
        abv: 5,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Pecan.jpg"
    },
    {
        id: 27,
        name: "Purple Haze",
        description: "Purple Haze is a crisp, American style wheat beer with raspberry puree added after filtration. Therefore, you may see raspberry pulp in the beer. The raspberries provide the lager with a subtle purple coloration and haze, a fruity aroma, and a tartly sweet taste. This beer is best served with salads or light fruit desserts, such as soufflés or chiffon cakes. Many people enjoy it with chocolate desserts. Purple Haze pairs well with certain cheeses, such as ripened Brie or any dessert made with Mascarpone. It's also great paired with entrees prepared with fruit, especially citrus. Consider enjoying Purple Haze alone at the end of your meal as dessert.",
        abv: 4.2,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Purple Haze.jpg"
    },
    {
        id: 28,
        name: "Red Ale",
        description: "Red Ale (March – May) is brewed with British pale and crystal malts, Sterling hops, and an ale yeast from California. This ale has a rich ruby color, lacy collar, and a pronounced caramel flavor. Try it with traditional Irish fare or a sweet and pleasant cow's milk cheese called Dubliner that can be found in most grocery stores.",
        abv: 5.2,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Red Ale.jpg"
    },
    {
        id: 29,
        name: "Restoration",
        description: "Restoration Pale Ale is made with Pale, Lager, Crystal and Cara Pils malted barley. It is liberally hopped and dry hopped with American Cascade and fermented with California Ale yeast. The end result is a brilliant gold ale with a rich body, mild bitterness and a snappy fresh citrus hop flavor and aroma. This beer can be paired with many different dishes according to your taste. The citrus flavor and aroma make it an excellent choice with most fish, especially ones that are prepared to match the flavor of the beer. American, Muenster, Havarti and Monterey Jack cheeses pair well with Restoration.",
        abv: 5,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Restoration.jpg"
    },
    {
        id: 30,
        name: "Satsuma",
        description: "Real Louisiana Satsumas, golden wheat, oats and the finest barley create Abita Satsuma Harvest Wit. Pale and cloudy, like the haze on a hot summer day, this white beer has a sweet and subtle citrus flavor with a touch of spice that is cool and refreshing. Abita Satsuma Harvest Wit is very versatile and can compliment a number of dishes. This brew pairs well with salads, fish, shrimp and lobster, as long as the dishes are not too spicy. Thai dishes, which often have citric notes in their flavor profile, would also perfectly compliment the orange flavors in Abita Satsuma Harvest Wit.",
        abv: 5.1,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Satsuma.jpg"
    },
    {
        id: 31,
        name: "Save Our Shore",
        description: "This Abita Beer is a message in a bottle...a distress signal for the troubled waters of our Gulf Coast. For every bottle sold Abita will donate 75¢ to the rescue and restoration of the environment, industry and individuals fighting to survive this disastrous oil spill. This unfiltered Weizen Pils is made with Pilsner and Wheat malts. It is hopped and dry hopped with Sterling and German Perle hops. It has a brilliant gold color, a sweet malt flavor, and a pleasant bitterness and aroma.",
        abv: 7,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Save Our Shore.jpg"
    },
    {
        id: 32,
        name: "Strawberry",
        description: "Strawberry Harvest Lager is a wheat beer made with real Louisiana strawberries, picked late in the season when they're at their sweetest. This brew has earned quite a reputation in a short time, causing the brewery to up their production year after year. When this brew is found, emails and phone calls fly to friends informing them of the store's location. Strawberry Harvest is a crisp, light lager with just a hint of strawberry sweetness. It is wonderful with desserts or lighter fares such as salads and pastas. Fresh cheeses such as Burrata, chevre, Creszenza, mozzarella or Teleme pair well with Strawberry Harvest.",
        abv: 4.2,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Strawberry.jpg"
    },
    {
        id: 33,
        name: "Turbodog",
        description: "Turbodog is a dark brown ale brewed with Willamette hops and a combination of pale, crystal and chocolate malts. This combination gives Turbodog its rich body and color and a sweet chocolate toffee-like flavor. Turbodog began as a specialty ale but has gained a huge loyal following and has become one of our flagship brews. This ale pairs well with most meats and is great served with hamburgers or sausages. It is a good match with smoked fish and can even stand up to wild game dishes. Turbodog is also great for marinating and braising meats and cooking such things as cabbage and greens. Colby, Gloucester, Cheddar and Blue cheeses go nicely with Turbodog. It's perfect with spicy Louisiana jambalaya or Spanish paella. Some even like it paired with chocolate!",
        abv: 5.6,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Turbodog.jpg"
    },
    {
        id: 34,
        name: "Wheat",
        description: "Wheat (May – September) German brewers discovered centuries ago that the addition of wheat produces a distinctively light, refreshing beer. Unlike traditional German wheat beers produced by other breweries, Abita Wheat is a lager, not an ale, and contains a generous amount of wheat which produces a clean, simple flavor. For a change of pace, try Abita Wheat with a twist of lemon. Feta and goat cheeses pair well with Wheat beer. Great with summertime fare such as pasta and salads, but don't forget barbeque and anything right off the grill.",
        abv: 4.2,
        created_at: "2010-12-07T02:53:38Z",
        updated_at: "2010-12-07T02:53:38Z",
        brewery: "Abita Brewing Company",
        imageUrl: "img/beers/Wheat.jpg"
    },
    {
        id: 35,
        name: "Amber",
        description: "Based on a recipe from a turn-of-the-century brewery in the Juneau area. Richly malty and long on the palate, with just enough hop backing to make this beautiful amber colored 'alt' style beer notably well balanced. It is made from glacier-fed water and a generous blend of the finest quality European and Pacific Northwest hop varieties and premium two-row pale and specialty malts.",
        abv: 5.3,
        created_at: "2011-05-29T03:24:18Z",
        updated_at: "2011-05-29T03:24:18Z",
        brewery: "Alaskan Brewing Company",
        imageUrl: "img/beers/Amber.jpg"
    },
    {
        id: 36,
        name: "IPA",
        description: "Honey gold in color with a fruity, citrus aroma. An enticing blend of hops and our dry hopping process, in which hops are added directly to tanks during fermentation, give this brew a very intense, complex aromatic character with a refreshing hop finish.",
        abv: 6.2,
        created_at: "2011-05-29T03:24:18Z",
        updated_at: "2011-05-29T03:24:18Z",
        brewery: "Alaskan Brewing Company",
        imageUrl: "img/beers/IPA.JPG"
    },
    {
        id: 37,
        name: "Pale",
        description: "A clean, softly malted body with a hint of citrus overtones, followed by a hop-accented dry, crisp finish.",
        abv: 5.2,
        created_at: "2011-05-29T03:24:18Z",
        updated_at: "2011-05-29T03:24:18Z",
        brewery: "Alaskan Brewing Company",
        imageUrl: "img/beers/Pale.jpg"
    },
    {
        id: 38,
        name: "Smoked Porter",
        description: "The dark, robust body and pronounced smoky flavor of this limited edition beer make it an adventuresome taste experience. Alaskan Smoked Porter is produced in limited 'vintages' each year on November 1st and unlike most beers, may be aged in the bottle much like fine wine.",
        abv: 6.5,
        created_at: "2011-05-29T03:24:18Z",
        updated_at: "2011-05-29T03:24:18Z",
        brewery: "Alaskan Brewing Company",
        imageUrl: "img/beers/Smoked Porter.JPG"
    },
    {
        id: 39,
        name: "Stout",
        description: "The unique blend of the oats and malts produces a balanced, smooth beer with hints of coffee and caramel.",
        abv: 5.7,
        created_at: "2011-05-29T03:24:18Z",
        updated_at: "2011-05-29T03:24:18Z",
        brewery: "Alaskan Brewing Company",
        imageUrl: "img/beers/Stout.jpg"
    },
    {
        id: 40,
        name: "Summer Ale",
        description: "It balances a softly malted palate with the clean freshness of hops. In the tradition of the style, neither overpowers the other. Both hops and malt come together to refresh and renew the palate.",
        abv: 5.3,
        created_at: "2011-05-29T03:24:18Z",
        updated_at: "2011-05-29T03:24:18Z",
        brewery: "Alaskan Brewing Company",
        imageUrl: "img/beers/Summer Ale.jpg"
    },
    {
        id: 41,
        name: "White",
        description: "A soft, slightly sweet base with the unique spice aroma of coriander and crisp, citrus finish of orange peel. A light and effervescent body combined with the smooth palate creates a complex and delicate beer that is deliciously refreshing in any season.",
        abv: 5.3,
        created_at: "2011-05-29T03:24:18Z",
        updated_at: "2011-05-29T03:24:18Z",
        brewery: "Alaskan Brewing Company",
        imageUrl: "img/beers/White.jpg"
    },
    {
        id: 42,
        name: "Winter Ale",
        description: "Brewed in the style of an English Olde Ale, this ale balances the sweet heady aroma of spruce tips with the clean crisp finish of noble hops. Its malty richness is complemented by the warming sensation of alcohol.",
        abv: 6.4,
        created_at: "2011-05-29T03:24:18Z",
        updated_at: "2011-05-29T03:24:18Z",
        brewery: "Alaskan Brewing Company",
        imageUrl: "img/beers/Winter Ale.jpg"
    },
    {
        id: 43,
        name: "Ambergeddon",
        description: "With a fury of hop flavor and a hint of malt backbone, this west coast amber is part ale, part sensory eruption, and all American.",
        abv: 6.8,
        created_at: "2011-05-29T03:24:40Z",
        updated_at: "2011-05-29T03:24:40Z",
        brewery: "Ale Asylum",
        imageUrl: "img/beers/Ambergeddon.jpg"
    },
    {
        id: 44,
        name: "Contorter Porter",
        description: "Dark in color yet soft on the palate. English chocolate malts give it a complex, rich flavor wrapped in a silky smooth finish.",
        abv: 4.8,
        created_at: "2011-05-29T03:24:40Z",
        updated_at: "2011-05-29T03:24:40Z",
        brewery: "Ale Asylum",
        imageUrl: "img/beers/Contorter Porter.jpg"
    },
    {
        id: 45,
        name: "Hopalicious",
        description: "Eleven separate additions of cascade hops give this American pale ale its lush citrus aroma and bold hop flavor without crazy bitterness.",
        abv: 5.8,
        created_at: "2011-05-29T03:24:40Z",
        updated_at: "2011-05-29T03:24:40Z",
        brewery: "Ale Asylum",
        imageUrl: "img/beers/Hopalicious.jpg"
    },
    {
        id: 48,
        name: "Evil Dead Red",
        description: " Vivid mahogany color, good head formation and retention. Rich, chewy, toasty, malty flavors perfectly balanced by a moderate hoppy bitterness. The aroma starts with a pleasant hop aroma followed by a nice malty sweetness. Well-rounded and well-balanced. Smooth, medium-bodied. Lush and rich on the palate with a semi-dry finish.",
        abv: 6.66,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Evil Dead Red.php"
    },
    {
        id: 46,
        name: "Madtown Nutbrown",
        description: "Velvety smooth with a rich caramel aroma. A blend of seven different malts for just the right touch of sweetness and a creamy finish.",
        abv: 5.5,
        created_at: "2011-05-29T03:24:40Z",
        updated_at: "2011-05-29T03:24:40Z",
        brewery: "Ale Asylum",
        imageUrl: "img/beers/Madtown Nutbrown.png"
    },
    {
        id: 50,
        name: "Horny Devil",
        description: "An authentic Belgian Style ale, from the Belgian candi sugar right down to the yeast, a Belgian strain from a Trappist monastery in Belgium. In addition to the malts, candi sugar and fresh hops, there is also a little added twist from coriander seeds, which impart a refreshing citrus flavor to an outstanding ale. Bright straw/light yellow color and good head formation and retention when properly served. Appealing Brussels lace. Intriguingly complex.",
        abv: 11,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Horny Devil.jpg"
    },
    {
        id: 51,
        name: "IPA",
        description: "Deep golden to light amber color, and a nice off-white head, with good retention when properly served. Starts off with pleasantly strong hop flavors, balanced by a firm malt backdrop, then fades to a dry finish with a lingering hoppiness.",
        abv: 7.25,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/IPA.JPG"
    },
    {
        id: 52,
        name: "Li'l Devil",
        description: "Gold color, fluffy white head of foam with good head retention. Clean malt flavors with a hint of tangy hop tones. Belgian candi sugar, coriander, and orange peel add a twist, along with the Trappist yeast strain. Refreshing, quenching and easy to drink.",
        abv: 5.5,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Li'l Devil.jpe"
    },
    {
        id: 54,
        name: "Nautical Nut Brown",
        description: "Rich chocolate malt flavors create complexity and drinkability in this classic English-style Nut Brown ale. Although dark in color, Nautical Nut Brown ale is an extremely easy drinking, relatively low alcohol beer.",
        abv: 5,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Nautical Nut Brown.jpg"
    },
    {
        id: 55,
        name: "Old Numbskull",
        description: "A West Coast style barleywine. Aroma starts with toasty, caramel notes and a pleasant hop character. Color is deep amber, with tan head and impressive 'Brussels Lace' that clings to the sides of the glass.",
        abv: 11,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/old numbskull.jpg"
    },
    {
        id: 47,
        name: "Anvil ESB",
        description: "Bright copper color with light tan head. Malty slightly hoppy aroma. Caramel and malty flavors with a perfect balance of imported English hops.",
        abv: 5.5,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Anvil ESB.JPG"
    },
    {
        id: 49,
        name: "Grand Cru",
        description: "Medium-dark brown, with tan head. Sweet, malty aroma with a satisfying balance of hoppiness. Tremendously intriguing, complex flavors play upon the palate shifting from sweet to tangy to hoppy and so on. The medium-dryfinish leaves you eager for the next sip.",
        abv: 10.5,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Grand Cru.jpg"
    },
    {
        id: 53,
        name: "My Bloody Valentine",
        description: "Caramel-sweet malt is delicately balanced with floral American hop varieties for a truly unique drinking sensation. A deep mahogany red color and a big, aromatic hop profile are the signatures of this seasonal ale.",
        abv: 6.66,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/My Bloody Valentine.JPG"
    },
    {
        id: 56,
        name: "Speedway Stout",
        description: "Jet Black, with an off-white head. Starts with a strong coffee and dark chocolate sensation, then fades to a multitude of toasty, roasty and caramel malt flavors. Clean and crisp, full-bodied. Warmth from the high alcohol content lightens up the feel.",
        abv: 12,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Speedway Stout.jpg"
    },
    {
        id: 57,
        name: "Wee Heavy",
        description: "A classic Scotch Ale. Deep mahogany color with nice tan head. Rich, toasty, malty aroma and flavor with a faint touch of smokiness. A tinge of hops provides the perfect balance to the maltiness. Full-bodied, smooth and warming.",
        abv: 10,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Wee Heavy.jpg"
    },
    {
        id: 58,
        name: "X",
        description: "An Extra Pale Ale with a pale yellow color, bright white head. Aroma of fresh hops with notes of citrus and pine. Light bodied, smooth on the palate, with a dry finish and superb aftertaste.",
        abv: 5.5,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/X.jpg"
    },
    {
        id: 59,
        name: "Yule Smith Winter",
        description: "Brewed as an Imperial Red Ale. This version is maltier, more balanced, and darker in color than the summer version. Although quite malty, big hop flavors and aromas are abundant making this an unforgettable winter warmer.",
        abv: 9.5,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Yule Smith Winter.jpg"
    },
    {
        id: 60,
        name: "Yule Smith Summer",
        description: "The enormous load of hops requires a substantial malt background to create just the right balance for a Double IPA.",
        abv: 9.5,
        created_at: "2011-05-29T03:25:05Z",
        updated_at: "2011-05-29T03:25:05Z",
        brewery: "AleSmith",
        imageUrl: "img/beers/Yule Smith Summer.jpg"
    },
    {
        id: 84,
        name: "Southwold Bitter",
        description: "A beautiful copper-coloured beer, late and dry-hopped with Fuggles for a distinctive, lingering taste of hops. Brewed with the finest East Anglian Pale Ale malt barley, sourced locally to the brewery.",
        abv: 3.7,
        created_at: "2013-01-18T14:59:50Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Southwold Bitter.jpg"
    },
    {
        id: 82,
        name: "Old Ale",
        description: "This is a mild ale style beer brewed with East Anglian pale ale and Crystal malted barley and Boadicea hops, dark red brown in colour with an aroma of caramel and nutty chocolate. The toffee and chocolate also come through on the palate along with hints of red fruits, all balanced by a smooth bitterness. A traditional speciality winter warmer. Flavour of fruit, malt and roast grain, with a hint of caramel.",
        abv: 4.1,
        created_at: "2013-01-18T14:57:12Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Old Ale.jpg"
    },
    {
        id: 83,
        name: "American-style IPA",
        description: "A golden beer with fragrant citrus and floral aromas and a deep citrus bitterness. It is brewed with a blend of American hops, such as Willamette, Amarillo, Cascade, Centennial, Chinook and Citra, and Pale Ale malted barley, along with some Munich malt, Crystal malt and malted wheat give a biscuity backbone to the citrus from the hops.",
        abv: 4.8,
        created_at: "2013-01-18T14:58:33Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/American-style IPA.jpg"
    },
    {
        id: 87,
        name: "Ginger Beer",
        description: "A beer with authenticity and flavour, rich in ginger and citrus notes, spice with a malty sweetness.",
        abv: 2.5,
        created_at: "2013-01-18T15:01:22Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Ginger Beer.jpg"
    },
    {
        id: 85,
        name: "Broadside",
        description: "A dark ruby red beer rich in fruitcake aromas, almonds and conserved fruit brewed with Pale Ale malt and First Gold hops.",
        abv: 4.7,
        created_at: "2013-01-18T15:00:32Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Broadside.jpg"
    },
    {
        id: 86,
        name: "Explorer",
        description: "A light and refreshing, suffused with the aromas of a grapefruit grove. The citrus attack will burst on your palate as the hops deliver their fruity bitterness.",
        abv: 4.3,
        created_at: "2013-01-18T15:00:56Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Explorer.jpg"
    },
    {
        id: 88,
        name: "Sole Star",
        description: "A full-flavored pale amber beer, with a light floral/citrus aroma, gentle caramel notes and a good level of bitterness. Brewed with Pale Ale, Crystal, Black and Munich malts which are toasted to add more flavor. Chinook and Cascade hops are used to add bitterness to balance out the sweetness.",
        abv: 2.7,
        created_at: "2013-01-18T15:02:06Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Sole Star.jpg"
    },
    {
        id: 89,
        name: "Ghost Ship",
        description: "A good assertive pithy bitterness and a malty backbone.",
        abv: 4.5,
        created_at: "2013-01-18T15:02:47Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Ghost Ship.jpg"
    },
    {
        id: 90,
        name: "Gunhill",
        description: "A traditional dark ruby beer described as across between a dark mild and a brown ale. The toffee, chocolate and spicy flavours come from the Chocolate, Crystal and Aromatic malted barleys and the sweetness left from the Tipple malted barley is balanced by the bitterness from the Boadicea hops.",
        abv: 4,
        created_at: "2013-01-18T15:03:16Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Gunhill.jpg"
    },
    {
        id: 91,
        name: "Spindrift",
        description: "A golden craft beer, full of flavour with a crisp refreshing citrus taste, wonderful orange peel aromas and crowned with a full white head from the wheat added to the brew. Brewed from a blend of East Anglian malted barley, Boadicea hops and wheat. Chilled and filtered to retain all the freshness, flavour and aromas of unpasteurised beer.",
        abv: 4,
        created_at: "2013-01-18T15:03:44Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Spindrift.jpg"
    },
    {
        id: 92,
        name: "Lighthouse",
        description: "A light golden beer with a light fragrance, lovely malty flavors and a long hoppy finish. Brewed with Pale Ale and Crystal malt, it has a hint of caramel and toffee. It’s hopped with a blend of Fuggles and Goldings hops.",
        abv: 3.4,
        created_at: "2013-01-18T15:04:13Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Lighthouse.jpg"
    },
    {
        id: 93,
        name: "Sole Bay Celebratory Ale",
        description: "Hazy gold in color with a good carbonation, this beer has aromas and flavors of honey, bread, bananas, pear drops, and bubblegum with a warming, luscious finish. Brewed with East Anglian Pilsner malted barley, Demerara and Muscavado sugar and lightly hopped with Nelson Sauvign. A few springs of locally grown lavender are added at the end of fermentation to add a subtle floral touch.",
        abv: 10,
        created_at: "2013-01-18T15:04:54Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Sole Bay Celebratory Ale.jpg"
    },
    {
        id: 94,
        name: "Innovation",
        description: "Brewed with a blend of Wheat and Pale Ale malts to give a spicy, biscuity undertone to the beer. A blend of hops from England, Slovenia and America (namely Boadicea, Columbus and Stryian Goldings) combine to give a grapefruit and tropical fruit aroma and bitterness that is balanced by the sweetness of the barley.",
        abv: 6.7,
        created_at: "2013-01-18T15:05:30Z",
        updated_at: "2013-01-18T15:19:22Z",
        brewery: "Adnams",
        imageUrl: "img/beers/Innovation.jpg"
    }
];

var pagedBeers = _.groupBy(beers,function(beer, idx){
    return idx / 20 >> 0;
});

app.get('/beers/:page', function (req, res) {
    var page = +req.params.page || 1;

    res.send(pagedBeers[page-1]);
});

app.get('/beer/:id', function (req, res) {
    var id = +req.params.id;
    var foundedBeer = _.find(beers, function (beer) {
        return beer.id == id;
    });
    res.send(foundedBeer);
});

app.use(express.static(__dirname));

app.listen(3000);
console.log('Listening on port 3000...');