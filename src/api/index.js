export const fetchHotels = (data)  => fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${data.location}&currency=rub&checkIn=${data.checkIn}&checkOut=${data.checkOut}&limit=20`)
  .then((response) => response.json());

