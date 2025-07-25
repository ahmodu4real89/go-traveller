
 export async function getFlight(query:string) {
    const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${query}`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
      },
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data, 'result');
      return data;
    } catch (err) {
      console.error('API call failed:', err);
    }
  }


export async function searchAttraction(query:string) {
    const url = `https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation?query=new&languagecode=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd938bf4abbmsh3cfe3fd277384b7p1fb280jsn1022ae5c8d63',
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };


  export async function searchHotels(query:string) {
    const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd938bf4abbmsh3cfe3fd277384b7p1fb280jsn1022ae5c8d63',
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

