$('.msger-send-btn').click(function(){
    let chat = $('.msger-input').val();
    let kata = chat.split(" ");
    
    $.getJSON("https://raw.githubusercontent.com/Anzhel18/PT.EML/main/jawaban.json", 
        function(data) {
            let jawaban = "";
            let jumlah = 0;

            $.each(data, function (key, value) {
                let tmp = 0;
                for(let i = 0; i < kata.length; i++ ){
                    if(value.keyword.includes(kata[i])){
                        tmp += 1;
                    }
                }
                       
                if(jumlah < tmp){
                    jumlah = tmp;
                    jawaban = value.jawaban;
                }
            });
            if(jawaban == ""){
                jawaban = "Silahkan hubungi admin kami +62 .....";
            }
            // pesan
            $('.msger-chat').append(`
                <div class="msg right-msg">
                    <div class="msg-img" style="background-image: url(images/user.png)"></div>
        
                    <div class="msg-bubble">
                        <div class="msg-info">
                            <div class="msg-info-name">Pelanggan</div>
                        </div>
                        <div class="msg-text">
                            ${chat}
                        </div>
                    </div>
                </div>

                <div class="msg left-msg">
                    <div class="msg-img" style="background-image: url(images/bot.png)"></div>
            
                    <div class="msg-bubble">
                        <div class="msg-info">
                            <div class="msg-info-name">BOT</div>
                        </div>
                        <div class="msg-text">
                            ${jawaban}
                        </div>
                    </div>
                </div>
            `);
        }
    );
});