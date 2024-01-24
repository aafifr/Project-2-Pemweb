(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Nama || client.Nama.indexOf(filter.Nama) > -1)
                    && (filter.Jabatan === undefined || client.Jabatan === filter.Jabatan)
                    && (!filter.Tempat_Lahir || client.Tempat_Lahir.indexOf(filter.Tempat_Lahir) > -1)
                    && (!filter.Tanggal_Lahir || client.Tanggal_Lahir === filter.Tanggal_Lahir)
                    && (filter.Aktif === undefined || client.Aktif === filter.Aktif)
                    && (filter.Action === undefined || client.Action === filter.Action);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;


    db.clients = [
        {
            "Nama": "Budi Dharmawan",
            "Jabatan": "Direktur",
            "Tempat Lahir": "Bogor",
            "Tanggal Lahir": "2000-10-11",
            "Aktif": true,
            "Action": "View | Edit"
        },
        {
            "Nama": "Annisa Amalia",
            "Jabatan": "Manajer",
            "Tempat Lahir": "Surabaya",
            "Tanggal Lahir": "2001-05-21",
            "Aktif": true,
            "Action": "View | Edit"
        },
        {
            "Nama": "Eddy Pardiman",
            "Jabatan": "Staff",
            "Tempat Lahir": "Cilacap",
            "Tanggal Lahir": "1999-07-15",
            "Aktif": false,
            "Action": "View | Edit"
        },
        {
            "Nama": "Nurul Hidayah",
            "Jabatan": "Staff",
            "Tempat Lahir": "Depok",
            "Tanggal Lahir": "2003-01-04",
            "Aktif": true,
            "Action": "View | Edit"
        },
    ];

}());