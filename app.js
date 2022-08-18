var carObject = {
    vehicle: 'car',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    FarePerKilo : 3,
    capacity: 4,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, debitis in natus qui eveniet sapiente, explicabo dolore, ducimus itaque velit sit assumenda pariatur eius sunt enim! Quibusdam ab optio distinctio.'
};


var bikeObject = {
    vehicle: 'bike',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    FarePerKilo : 2,
    capacity: 3,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, debitis in natus qui eveniet sapiente, explicabo dolore, ducimus itaque velit sit assumenda pariatur eius sunt enim! Quibusdam ab optio distinctio.'
};


var busObject = {
    vehicle: 'bus',
    imageUrl: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    FarePerKilo : 2,
    capacity: 30,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, debitis in natus qui eveniet sapiente, explicabo dolore, ducimus itaque velit sit assumenda pariatur eius sunt enim! Quibusdam ab optio distinctio.'
};


function displayServices (service){
    const mainSection = document.getElementById('main-section')
    const div = document.createElement('div');
    div.innerHTML =`<div class="card mt-3 mx-auto" style="max-width: 800px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${service.imageUrl} alt="..." class="img-fluid rounded-start h-100">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">transport mood ${service.vehicle}</h5>
          <p class="card-text">${service.description}</p>
          <p class="card-text"><small class="text-muted">Fare Per Kilo${service.FarePerKilo}</small>
          <small class="text-muted">Fare Per Kilo${service.capacity}</small></p>
        </div>
      </div>
    </div>
  </div>`;

    mainSection.appendChild(div)

}
displayServices(carObject);
displayServices(busObject);
displayServices(bikeObject);



