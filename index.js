
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden'
}

        $( ".change" ).on("click", function() {
            if( $( "body" ).hasClass( "dark" )) {
                $( "body" ).removeClass( "dark" );
                $( ".change" ).img( "himi" ).text("off");
            } else {
                $( "body" ).addClass( "dark" );
                $( ".change" ).img( "himi" ).text("on");
            }
        });
   
        var x = document.getElementById("out");
        var y = document.getElementById("weatherOut");
        function geolocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition)
            }else{
                x.innerText="Geo Not Supported"
            }
        }
        
        function showPosition(data){
            console.log(data)
            x.innerText=`La~ ${data.coords.latitude}, lo:~ ${data.coords.longitude}`
            let latitude = data.coords.latitude;
            let longitude = data.coords.longitude
            const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

            fetch(url,{method: 'GET'})
            
            .then((res) => res.json())
           
            .then((data) => {
                let cityName = data.city.name
                let weather = `${data.list[0].temp.day} °`
                let output = ` ${cityName}:~  ${weather}`
                console.log(data)
                y.innerText = output;
            })
        }       