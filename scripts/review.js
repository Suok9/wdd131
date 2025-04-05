window.onload = function () {
      let count = localStorage.getItem("reviewCount") || 0;
      count++;
      localStorage.setItem("reviewCount", count);
      document.getElementById("counter").textContent = `You have submitted ${count} review(s).`;
    };;
 
 document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;