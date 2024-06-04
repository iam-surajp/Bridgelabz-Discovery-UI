
  


    let data = [
      {
        temp: "32 °F",
        wind: "5 mph",
        compass: "73",
        loc: "39.08629948516978° N / -120.1605391°",
        itemfade: "Lake Tahoe, California",
        title: "Homewood Mountain Lake Club",
        img: "/assets/carousel_img/nature3.png",
      },
      {
        temp: "77 °F",
        wind: "102 mph",
        compass: "88",
        loc: "37.7749° N / -122.4194° W",
        itemfade: "Silicon Valley, California",
        title: "Carde Valle",
        img: "/assets/carousel_img/nature1.png",
        
      },
      {
        temp: "78 °F",
        wind: "10 mph",
        compass: "310",
        loc: "33.6784° N / -116.2981° W",
        itemfade: "La Quinta, California",
        title: "Madison",
        img: "/assets/carousel_img/nature2.jpg",
      },
      {
        temp: "28 °F",
        wind: "0 mph",
        compass: "0",
        loc: "48.4117° N / -114.3353° W",
        itemfade: "Whitefish, Montana",
        title: "Iron Horse",
        img: "/assets/carousel_img/nature4.jpg",
      },
      {
        temp: "19 °F",
        wind: "2 mph",
        compass: "173",
        loc: "45.2846° N / -111.4010° W",
        itemfade: "Big Sky, Montana",
        title: "Yellowstone Club",
        img: "/assets/carousel_img/nature5.jpg",
      },
      {
        temp: "46 °F",
        wind: "9 mph",
        compass: "350",
        loc: "32.9640° N / -97.1927° W",
        itemfade: "Westlake, Texas",
        title: "Vaquero",
        img: "/assets/carousel_img/nature6.jpg",
      },
      {
        temp: "54 °F",
        wind: "8 mph",
        compass: "24°",
        loc: "30.2672° N / -97.7431° W",
        itemfade: "Austin, Texas",
        title: "Driftwood",
        img: "/assets/carousel_img/nature7.jpg",
      },
      {
        temp: "74 °F",
        wind: "3 mph",
        compass: "359°",
        loc: "10.5232° N / -85.3550° W",
        itemfade: "Guanacaste, Costa Rica",
        title: "Zapotal Golf & Beach Club",
        img: "/assets/carousel_img/nature8.jpg",
      },
      {
        temp: "43 °F",
        wind: "6 mph",
        compass: "338°",
        loc: "36.1627° N / -86.7816° W",
        itemfade: "Nashville, Tennessee",
        title: "Troubadour",
        img: "/assets/carousel_img/nature9.jpg",
      },
      {
        temp: "34 °F",
        wind: "3 mph",
        compass: "325°",
        loc: "35.1174° N / -83.0963° W",
        itemfade: "Cashiers, North Carolina",
        title: "Mountaintop",
        img: "/assets/carousel_img/nature3.png",
      },
      {
        temp: "72 °F",
        wind: "3 mph",
        compass: "200",
        loc: "26.9414° N / -80.0905° W",
        itemfade: "Jupiter Island, Florida",
        title: "Atlantic Beach",
        img: "/assets/carousel_img/nature1.png",
      },
      {
        temp: "73 °F",
        wind: "0 mph",
        compass: "0°",
        loc: "26.1420° N / -81.7948° W",
        itemfade: "Naples, Florida",
        title: "Naples Beach Club",
        img: "/assets/carousel_img/nature5.jpg",
      },
      {
        temp: "75 °F",
        wind: "16 mph",
        compass: "195°",
        loc: "26.6518° N / -77.1177° W",
        itemfade: "Great Guana Cay, Bahamas",
        title: "Baker's Bay",
        img: "/assets/carousel_img/nature8.jpg",
      },
      {
        temp: "72 °F",
        wind: "2 mph",
        compass: "154°",
        loc: "19.3806° N / -70.2096° W",
        itemfade: "Rio San Juan, Dominican Republic",
        title: "Playa Grande",
        img: "/assets/carousel_img/nature2.jpg",
      },
      {
        temp: "79 °F",
        wind: "18 mph",
        compass: "103°",
        loc: "17.6112° N / -61.8043° W",
        itemfade: "Barbuda, West Indies",
        title: "Barbuda Ocean Club",
        img: "/assets/carousel_img/nature4.jpg",
      }
    ];

    let currentIndex = 0;

    function updateWeatherInfo(index) {
        $('#temp').html(data[index].temp);
        $('#wind').html(data[index].wind);
        $('#compass').html(data[index].compass);
        $('#subtitle-label').html(data[index].itemfade);
        $('#title-label').html(data[index].title);
        $('#location-coords').html(data[index].loc);
        $('#imgs').attr('src',data[index].img);
    }

$(document).ready(function(){
    $('#prevBtn').click(function() {
        currentIndex = (currentIndex - 1 + data.length) % data.length;
        updateWeatherInfo(currentIndex);
    });

    $('#nextBtn').click(function() {
        currentIndex = (currentIndex + 1) % data.length;
        updateWeatherInfo(currentIndex);
    });

    updateWeatherInfo(currentIndex);

});

  