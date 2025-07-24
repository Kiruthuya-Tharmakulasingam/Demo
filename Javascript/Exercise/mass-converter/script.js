function convert() {
      const amount = document.getElementById("amount").value;
      const from = document.getElementById("from").value;
      const to = document.getElementById("to").value;

      const result = (amount * from / to).toFixed(3);
      console.log(result);
      document.getElementById("result").value = result;
      
    }