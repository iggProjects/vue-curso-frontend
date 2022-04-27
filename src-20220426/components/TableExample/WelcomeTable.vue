<template >

    <div id="ppalTable">

        <p style="color:blue; font-size:12px;">WelcomTable.vue ✔</p>
        <h2>Example with genereric HTML Table in w3s</h2>

        <p><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_intro" target="_blanck">→ w3schools table ←</a></p>
        
        <hr>

        <div style="width:600px;">
            <table id="tablePrueba">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table>
        </div>


    </div>

</template>

<style scoped>

    #ppalTable { 
        border: 2px solid rgb(154, 154, 248); 
        margin:5px;        
        padding:15px; 
        height: auto;  
        width:90%;
    }
    
    #ppalTable h2 { text-align:center; color:blue; margin-bottom:5px; font-size:15px; }

    #ppalTable p { text-align:center; margin-bottom:5px;}  

    #ppalTable a { color:gray; font-size:16px; }
    
    #tablePrueba {
        font-family: arial, sans-serif;
        border-collapse: collapse;       
        margin-left: auto;  
        margin-right: auto;
        font-size:13px;
    }

    #tablePrueba > th, td {
        border: 2px solid #fad158;
        text-align: left;
        padding: 8px;
    }

    #tablePrueba tr:nth-child(even) {
       background-color: #a779fd;
       color:white;
    }

</style>