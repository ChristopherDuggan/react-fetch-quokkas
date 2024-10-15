const API_KEY = 'f7ed469928fe43ac99f174818242006'
const BASE_URL= `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};



export { show };
