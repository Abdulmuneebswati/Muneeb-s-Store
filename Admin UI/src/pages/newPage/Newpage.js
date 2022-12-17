import "./newPage.scss";
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

const Newpage = ({input,title}) => {
  const [file,setFile] = useState("");
  
  return (

    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file):"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAAB1CAMAAACS5EiGAAAAOVBMVEX///+hoaGcnJzz8/O0tLSXl5f7+/vJycmurq7k5OTv7+/d3d2mpqbT09Pq6ur39/fDw8O7u7uRkZFMquhhAAAEsElEQVR4nO2a2ZakIAyGywgCAi79/g87CaDVXVpIg9T0Bf+Zc6Y3rM8YsuHj0dTU1NTU1NTU1PQRDcqurFiLHu8CmoUBgK7DfyWia0h1C5E2hSzfxdkNlmL8PiAS2GKiG03kxQuZljIiAOeFL0y6hMiWEfFFTfrkyff5RHOhjfz+sq9MwPKRRBHS7sjr62VgykYqAeqez0cdkJZcIlW2/+UQrtMfjA25SMnbDXhnpDTAfywwc7jOdNx0uQGTpfF0zE7jjBqVMN/SDmzZ47hvc+PAIJOA7I8tPS3Pp238kzs+t+wQnoIE4rBsfgZ8g3YadNqym5BAnvqE3pnAnF+jGhKw4Xzl0Z8/hATr26X9/0F6ayPShZ1qWSmaPA+J7QNIV6ElGtTqIJmL1XPMTFWQ4DL+HvJ/bSR5ufyQ/ysjpWSE2PIaSAlFWKQArIG0Fx4RRZ5cDaSU6nn8LNL7XPJUbz6JlFQ8zw3pzyEluXekQqmBJCOFyaZIgVIloSS09ZGBQg2klK4nUp5USSjXzhQrduvUS5f9amwQVKdeurxorPquVOheOHh0EFSpHYh7UyTn1kOKj0HjI45qrWWE6WIQXK8BfxechlgrUBXpnZ3my2F5PSSMmCcFb8IJR0UkdHLxEgyUTJhw5iKlDQahW1Uf6oJhtPJ4GnB2I7mHFldOukFBJ1chxLKm8RBS7iHYb44rTs5KYkgJ5dapopOGIuWfWKRNmX+v6xnHWxUeD7zV1SAopkQH/6UKjBTtewqIsg91nC7HxRlEsbFriuJ1Tw7R9bDsSv2tB86QnUp+CNPoTVQAd7wm4KGWjpcLjMg/QD3RMPeFSpjbNTU1/TH10rhif5a+nJgW0xn2zOOzkbi1LWOulFaMhYSqu/3Qd7AM1ywuIE3b22sFEVwAOBYFrlheACjiPTslC6AePXYEdH4xYHD2k7D5mckmQ2vA5xFMTSFq5ideAb6XUO41BDqItEpjzb9lTkTSj7HzPebEt0pI8+2QpadSRE3WNwBYpFqngjfiaCADY0AaIMy5JGw1mLOSQ5K+efC/kMBCp8bAN8QKqEjC7wrrkoDEApLmod+e9rPvgEQEA9pAeiT66xX4w73/FGpaS86FViolQiQj6D4dEnqSz5qD2T8oIC2Gq9mAMA4J//ChnVupn7UIIi2CVPCWF1oJPx9mh4R1eLiU3O52Q8IeV0ycK28lQCPiMkavVTjD2gXlfYn2B/8q2nHd3EPHJm+lbWR6RFpgRYuODknTD3EpH+lL/PTBbdNuJiRnJFFQFAgyDH7uSkg2bHE61JIvSBp7cFg80tb8oUNjlUxeN1nL6FDxJvfu/RktfjRucraBiBek2e02h9Rz/+oiEMTeaqMN70QauX89SrqdTP3mNs3dkQgbxomQ0Ln1hKL/KTBI+ttxt5JTMZKLmIriHs1IOniOYp5IC213Qhq2pzpw2pcLepGRBtes/pF6A+ZvOYzX7o4k/wr36kroPclhqJowfXxpNB0X6DoYC7qvALxyChXW0CbrjB3crflnWvAS46BDJNIhBYxaa/XN7proJu2+wh8rTb4cfjdrn7KVtuEyj0l53doVNDU1NTU1NTU1NZ3oH1X7Mxk1aEIcAAAAAElFTkSuQmCC"}
             alt="" />
          </div>
          <div className="right">
            <form >
            <div className="formInput">
            <label htmlFor="file" >
                Image: <DriveFolderUploadOutlined className="icon"/></label>
                <input type="file" onChange={e=>setFile(e.target.files[0])} id="file" style={{display:"none"}}/>
              </div>
              { input.map(elem => 
              <div className="formInput" key={elem.id}>
                <label>{elem.label}</label>
                <input type={elem.type} placeholder={elem.placeholder} />
              </div>
              )}
              <button>Send </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newpage
