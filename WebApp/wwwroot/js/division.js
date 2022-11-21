$(document).ready(function () {
    $("#tableDivision").DataTable({
        ajax: {
            url: "https://localhost:44380/api/Division",
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
            {
                data: null,
                render: function (data, type, row) {
                    return `<button class="btn btn-warning" onclick="edit(${data.id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteDivision(${data.id})">Delete</button>
                            <button class="btn btn-primary" onclick="detailDivision(${data.id})">Detail</button>`
                }
            }
        ]
    })
});

function save() {
    var division = {};
    division.Name = $('#Name').val();
    division.Active = 1;
    if (division) {
        $.ajax({
            url: "https://localhost:44380/api/Division",
            contentType: "application/json",
            dataType: "json",
            type: "POST",
            data: JSON.stringify(division),
            success: function () {
                alert('Data berhasil ditambah!');
            },
            error: function (err) {
                alert(err);
            }
        })
    }
}

function clear() {
    $('#Name').val('');
}

function edit() {

}

function deleteDivision(id) {
    $.ajax({
        url: "https://localhost:44380/api/Division" + id,
        contentType: "application/json",
        dataType: "json",
        type: "delete",
        success: function () {
            alert('Data berhasil dihapus!');
        },
        error: function (err) {
            alert(err);
        }
    })
}

function detailDivision(id) {
    $.ajax({
        url: "https://localhost:44380/api/Division/" + id,
        contentType: "application/json",
        dataType: "json",
        type: "get",
        success: function () {
            console.log("berhasil get");
        },
        error: function (err) {
            alert(err);
        }
    })
}