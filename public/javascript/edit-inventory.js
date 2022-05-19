async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="inventory-title"]').value.trim();
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/inventories/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
     
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-inventory-form').addEventListener('submit', editFormHandler);