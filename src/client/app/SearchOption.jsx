import React from 'react';

export default function SearchOption(props) {

  const handleUserOption=event=>{
    event.preventDefault();

    //attr_name =
  }

 return (

      <div className="row text-center">
        <div>
          <form>
          <h2>I want to find someone who knows</h2>
             <select name="skill" id="">Skill
                  <option value="css">CSS</option>
                  <option value="html">HTML</option>
                  <option value="javascript">JavaScript</option>
                  <option value="jquery">JQuery</option>
                  <option value="node.js">Node.js</option>
                  <option value="mongo">Mongo</option>
                  <option value="sql">SQL</option>
                  <option value="react">REACT</option>
                  <option value="heroku">Heroku</option>
                  <option value="git">GIT</option>
                  <option value="ruby">Ruby</option>
                  <option value="rubyOnRails">Ruby on Rails</option>
             </select>
             <h2>I want to find someone who likes</h2>
            <input type="text" placeholder="enter an interest here" required/>
          </form>
        </div>
        <hr />
      </div>

 )

}






//jsx show if/skill or value


