
function App() {
  
  return (
    <>
      <div>
        <PostComponent/>
        </div>
    </>
  )
}

function PostComponent(){

  return <div style={{backgroundColor:"white"}}>
    <div style={{"background-color":"#ecf0f1", height: "20vh"}}>
      <div style={{display:"flex", justifyContent:'center'}}>
        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{height: "100px", width:"100px", borderRadius:150, padding: 60}}></img>
      </div>
    </div>
    <div style={{display:"flex", justifyContent:'center', marginTop:50, fontSize:40}}>
      Cereverse Society
    </div>
    <div style={{display:"flex", justifyContent:'center', color:"darkgray", fontWeight:'lighter'}}>
    To Utopia and Beyond!
    </div>
    <div style={{display: "flex", justifyContent:'center', margin:20, padding:20}}>
      <div style={{marginRight:100}}>
      People Helped:
      <br/>
      <br/>
      Consious Humans:
      </div>
      <div style={{color:"blueviolet", fontWeight:'bold'}}>
        78905
        <br/>
        <br/>

        1589
      </div>
    </div>
  </div>
}

export default App
