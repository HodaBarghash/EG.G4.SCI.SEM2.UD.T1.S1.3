function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kMBWdcQ7aV":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyELdjmxZs_35ey3dsS6FYqfQvwezaoy1YwWA1kBnicT-w8eomnKgrQDW01j0dihjXh/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

