export function SearchInput() {
  return (
    <div className="input-wrapper">
      <button className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="25px"
          width="25px"
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="#EBDEDB"
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          ></path>
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="#EBDEDB"
            d="M22 22L20 20"
          ></path>
        </svg>
      </button>
      <input
        placeholder="Procurar..."
        className="input"
        name="text"
        type="text"
      />
    </div>
  )
}

export function Input() {
  return (
    <div className="textInputWrapper">
      <input placeholder="Pesquisar" type="text" className="textInput" />
    </div>
  )
}