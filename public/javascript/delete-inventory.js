async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      const response = await fetch(`/api/inventories/${id}`, {
        method: 'DELETE'
      });
    
      if (response.ok) {
        document.location.replace('/');
        alert("you have successfuly deleted this inventory");
      } else {
        alert(response.statusText);
        alert("deletion was not successful , please try again");
      }

  }
  
  document.querySelector('.delete-inventory-btn').addEventListener('click', deleteFormHandler);
  