<style>
  .new_navbar {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    background-color: rgb(255, 255, 255);
    margin-top: 18px
  }
  
  .new_navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  .new_dropdown {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .new_dropdown .new_dropbtn {
    font-size: 16px;  
    border: none;
    outline: none;
    color: black;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  
  /*.new_navbar a:hover, .new_dropdown:hover .new_dropbtn {
    background-color: red;
  }*/

  .new_dropdown-content {
    display: none;
    position: absolute;
    margin-top: 180px;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .new_dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  
  .new_dropdown-content a:hover {
    background-color: #ddd;
  }
  
  .new_dropdown:hover .new_dropdown-content {
    display: block;
  }

  .new_login{
    width: 30%;
    margin-top: 18px;
    display: flex;
    justify-content: center;
  }

  .new_login a{
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    .new_login{
      width: 100%;
    }
    .new_navbar {
      width: 100%;
    }
  }
</style>


<div class="new_navbar">
  <div class="new_dropdown">
    <button class="new_dropbtn">
      <img src="./logo.png" alt="멜하는감자" style="height: 40px"/> <!--TODO 이미지 불러오기&반응형으로-->
    </button>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn">성적 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="new_dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn">수업 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="new_dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn">수강신청 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="new_dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

  <div class="new_dropdown">
    <button class="new_dropbtn">기타 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="new_dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
</div>
<div class="new_login">
  <a href="/.auth/login/google?post_login_redirect_uri=/products/">로그인 / 회원가입</a>
</div>

