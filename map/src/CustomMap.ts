import User from "./User";
import Company from "./Company";

interface Marker {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(marker: Marker): void {
    const newMarker = new google.maps.Marker({
      map: this.googleMap,
      position: marker.location
    });

    newMarker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: marker.markerContent()
      });

      infoWindow.open(this.googleMap, newMarker);
    });
  }
}
