<template>
    <div>   
        <input id="id" placeholder="Id?"><br>
        <input id="name" placeholder="Name?"><br>    
        <input type="radio" id="male" name="gender" checked> Male    
        <input type="radio" id="female" name="gender"> Female<br>    
        <input id="salary" placeholder="Salary?">   
        <hr>   
        <button onclick="ctrl.create()">Create</button>   
        <button onclick="ctrl.update()">Update</button>   
        <button onclick="ctrl.delete()">Delete</button>   
        <button onclick="ctrl.reset()">Reset</button>  
    </div>  
    <hr>  
    <table border="1" style="width: 100%">  
        <thead>   
            <tr> 
                <th>Id</th> 
                <th>Name</th> 
                <th>Gender</th> 
                <th>Salary</th> 
                <th></th> 
            </tr>  
        </thead>  
        <tbody id="list">

        </tbody>  
    </table> 

</template>
  
<script setup>
    var ctrl = {   
        setForm(employee){ // hiển thị đối tượng json lên form
            document.getElementById("id").value = employee.id; 
            document.getElementById("name").value = employee.name; 
            document.getElementById("salary").value = employee.salary; 
            if(employee.gender){  
                document.getElementById("male").checked = true; 
            } else {  
                ocument.getElementById("female").checked = true; 
            }    
        },   
        getForm(){ // tạo đối tượng json từ form
            return { 
                id: document.getElementById("id").value,  
                name: document.getElementById("name").value,  
                gender: document.getElementById("male").checked,  
                salary: parseFloat(document.getElementById("salary").value) 
            }
        },   
        fillToTable(employees){ // đổ mảng đối tượng json lên bảng
            var rows = []; 
            employees.forEach(e => {  
                var row = `<tr>   
                    <td>${e.id}</td>   
                    <td>${e.name}</td>   
                    <td>${e.gender?'Male':'Female'}</td>   
                    <td>${e.salary}</td>   
                    <td><a href="javascript:ctrl.edit('${e.id}')">Edit</a></td>  
                </tr>`;  
                rows.push(row); 
            }); 
            document.getElementById("list").innerHTML = rows.join('');    
        },   
        loadAll(){ // Gửi yêu cầu lấy tất cả nhân viên đến REST API 
            var url = "http://localhost:8080/SOF3011Slide7/employees"; 
            fetch(url, {method: "GET"}).then(resp => resp.json()).then(employees => {  
                this.fillToTable(employees); 
            });   
        },   
        create(){ // Gửi yêu cầu tạo nhân viên mới đến REST API
            var data = this.getForm(); 
            var url = `http://localhost:8080/SOF3011Slide7/employees`; 
            fetch(url, {  
                method: "POST",  
                headers: {"Content-Type": "application/json"},  
                body: JSON.stringify(data) 
            }).then(resp => resp.json()).then(json => {  
                this.loadAll();  this.reset(); 
            });    
        },   
        update(){ // Gửi yêu cầu cập nhật nhân viên đến REST API
            var data = this.getForm(); 
            var url = `http://localhost:8080/SOF3011Slide7/employees/${data.id}`; 
            fetch(url, {  
                method: "PUT",  
                headers: {"Content-Type": "application/json"},  
                body: JSON.stringify(data) 
            }).then(resp => resp.json()).then(json => {  
                this.loadAll(); 
            });    
        },   
        delete(){ // Gửi yêu cầu xóa nhân viên đến REST API
            var id = document.getElementById("id").value; 
            var url = `http://localhost:8080/SOF3011Slide7/employees/${id}`; 
            fetch(url, {method: "DELETE"}).then(resp => resp.json()).then(json => { 
                this.loadAll(); 
                this.reset(); 
            });    
        },   
        reset(){ // Xóa trắng form
            var employee = {id:"", name:"", salary:0, gender:true}; 
            this.setForm(employee);    
        },   
        edit(id){ // Gửi yêu cầu lấy nhân viên theo mã đến REST API
            var url = `http://localhost:8080/SOF3011Slide7/employees/${id}`; 
            fetch(url, {method: "GET"}).then(resp => resp.json()).then(employee => { 
                this.setForm(employee); 
            });    
        }  
    }  
    ctrl.loadAll(); 
</script>
  
<style scoped>
  
</style>