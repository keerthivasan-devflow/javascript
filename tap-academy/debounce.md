
      let counter = 1;
      let search = document.getElementById("searchInput");

      async function searchQueryAPI(query) {
        try {
          console.log(`${query} - ${counter++}`);
          const response = await fetch(`http://api.example.com/search?query=${query}`);
          const data = await response.json();
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }

      function debounce(func, delay) {
        let timer;
        return function (...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            func(...args);
          }, delay);
        };
      }

      let optimizedFunc = debounce(searchQueryAPI, 1000);
      search.addEventListener("keyup", (e) => optimizedFunc(e.target.value));