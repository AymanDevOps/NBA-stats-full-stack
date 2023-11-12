var trash = document.getElementsByClassName("fa fa-trash");
var edit = document.getElementsByClassName("fas fa-edit");


Array.from(edit).forEach(function(element) {
      element.addEventListener('click', function(){
        const listItem = this.closest(".message")
        const name = listItem.querySelector(".name").textContent.trim()
        const points = parseFloat(listItem.querySelector(".points").textContent)
        const assists = parseFloat(listItem.querySelector(".assists").textContent)
        const rebounds = parseFloat(listItem.querySelector(".rebounds").textContent)

        // const name = this.parentNode.parentNode.childNodes[1].innerText
        // const points = parseFloat(this.parentNode.parentNode.childNodes[3].innerText)
        // const assists = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        // const rebounds = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'points': points,
            'assists': assists,
            'rebounds': rebounds
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const listItem = this.closest(".message")
//         const name = this.parentNode.parentNode.childNodes[1].textContent.trim()
//         const points = parseFloat(listItem.querySelector(".points").textContent)
//         const assists = parseFloat(listItem.querySelector(".assists").textContent)
//         const rebounds = parseFloat(listItem.querySelector(".rebounds").textContent)
//         // const points = parseFloat(this.parentNode.parentNode.childNodes[3].innerText.trim())
//         // const assists = parseFloat(this.parentNode.parentNode.childNodes[5].innerText.trim())
//         // const rebounds = parseFloat(this.parentNode.parentNode.childNodes[7].innerText.trim())
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'points': points, 
//             'assists': assists,
//             'rebounds': rebounds
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });

Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    // Use closest and querySelector like in the edit functionality to ensure accuracy
    const listItem = this.closest(".message")
    const name = listItem.querySelector(".name").textContent.trim(); // Trim the name here
    const points = parseFloat(listItem.querySelector(".points").textContent);
    const assists = parseFloat(listItem.querySelector(".assists").textContent);
    const rebounds = parseFloat(listItem.querySelector(".rebounds").textContent);

    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name, // Use the accurately fetched name
        'points': points,
        'assists': assists,
        'rebounds': rebounds
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
