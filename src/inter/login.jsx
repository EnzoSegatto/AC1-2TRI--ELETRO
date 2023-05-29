
function login(){
    return (
    <div class ="Vali">
    <h1 >Faça seu Login</h1>
	<form>
        <div class="email">
		    <label for="email">Email:</label>
		    <input type="email" id="email" name="email"></input>
        </div>
        <div class="senha">
            <label for="email">Senha:</label>
		    <input type="senha" id="senha" name="senha" ></input>
        </div>
        <div className="button">
		    <button tittle="solid" type="submit" class="oo" >Enviar</button>
        </div>

	</form>
    </div>
    )
      
   }
   export default login;