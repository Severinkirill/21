import './App.css'; // Залишаємо стилі, якщо вони є

function App() {
  return (
    <div>
      {/* Навігаційна панель */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SWAPI Explorer 🚀</a>
        </div>
      </nav>

      {/* Основний контейнер */}
      <div className="container mt-4">
        <h1 className="mb-4">Star Wars API Interface</h1>

        {/* Форма для вибору категорії */}
        <div className="row mb-4">
          <div className="col-md-6">
            <select className="form-select">
              <option selected>Select a category...</option>
              <option value="people">People</option>
              <option value="planets">Planets</option>
              <option value="starships">Starships</option>
              <option value="vehicles">Vehicles</option>
              <option value="species">Species</option>
              <option value="films">Films</option>
            </select>
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Search by name..." />
          </div>
        </div>

        {/* Секція для відображення результатів (картки) */}
        <div className="row">
          {/* Приклад картки для People */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Luke Skywalker</h5>
                <p className="card-text">
                  <strong>Height:</strong> 172 cm <br />
                  <strong>Mass:</strong> 77 kg <br />
                  <strong>Hair color:</strong> Blond
                </p>
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>

          {/* Приклад картки для Planets */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tatooine</h5>
                <p className="card-text">
                  <strong>Climate:</strong> Arid <br />
                  <strong>Population:</strong> 200000 <br />
                  <strong>Terrain:</strong> Desert
                </p>
                <button className="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;