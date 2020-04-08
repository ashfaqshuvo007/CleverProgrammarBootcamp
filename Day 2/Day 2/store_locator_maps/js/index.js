
function mapInit() {
    var losAngeles = {
        lat: 34.063380,
        lng: -118.358080
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
    });

    var marker = new google.maps.Marker({
        position: losAngeles,
        map: map,
        title: 'Los Angeles'
    });

}