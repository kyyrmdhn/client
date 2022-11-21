$(document).ready(function () {
    
    $("#tableDepartment").DataTable({
        ajax: {
            url: "https://localhost:44380/api/Department",
            dataType: "json",
        },
        columns: [
            {
                data: null,
                render: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                }
            }, 
            { data: "name" },
            { data: "divisionId" },
            {
                data: null,
                render: function (data, type, row) {
                    return `<a class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal-edit" onclick="editDepartment(${data.id})">Edit</a>
                            <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confDelete">Delete</button>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detail-department" onclick="detailDepartment(${data.id})">Detail</button>
                            `
                }
            }
        ],  
        dom: 'Bfrtip',
        buttons: [
            'colvis', 'excel', 'pdf', 'csv', 'copy'
        ]
    });
});

function onLoad() {
    var data = {};
    $.ajax({
        type: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        url: "https://localhost:44380/api/Department",
        success: function (result) {
            data.id = result.id;
            data.name = result.Name;
            data.divId = result.DivisionId;
        }
    });
}

function save() {
    var department = {};
    department.Name = $('#Name').val();
    department.DivisionId = $('#divId').val();
    department.Active = 1;
    if (department) {
        $.ajax({
            url: "https://localhost:44380/api/Department",
            contentType: "application/json",
            dataType: "json",
            type: "POST",
            data: JSON.stringify(department),
            success: function () {
                Swal.fire(
                    'Good job!',
                    'Data has been saved!',
                    'success'
                );
            },
            error: function (err) {
                alert(err);
            }
        })
    }
}

function editDepartment() {
    onLoad();
    var department = {};
    $("#NameEdit").html(onLoad().data.name);
    department.divId = $("#divIdEdit").replaceWith(onLoad().data.divId);
    $.ajax({
        url: `https://localhost:44380/api/Department/`,
        contentType: "application/json",
        dataType: "json",
        type: "PUT",
        data: JSON.stringify(department),
        success: function () {
            alert('data berhasil diubah');
        },
        error: function (err) {
            alert(err);
        }
    })
}

function deleteDepartment (id){
    $.ajax({
        url: `https://localhost:44380/api/Department?id=${id}`,
        contentType: "application/json",
        dataType: "json",
        type: "delete",
        success: function () {
            Swal.fire(
                'Good job!',
                'Data has been deleted!',
                'success'
            )
        },
        error: function (err) {
            alert(err);
        }
    })
}

function detailDepartment(id) {
    $.ajax({
        url: `https://localhost:44380/api/Department/${id}`,
        contentType: "application/json",
        dataType: "json",
        type: "get",
        success: function (result) {
            console.log(result.data.name);
            console.log(result.data.divisionId);
            /*var objResult = JSON.parse(result);*/
            $("#nameDetail").html(result.data.name);
            $("#divIdDetail").html(result.data.divisionId);
        },
        error: function (err) {
            alert(err);
        }
    })
}