<!-- set JWT token in http request header -->
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    if(localStorage.getItem('token')) {
        jqXHR.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
});

<!-- print error -->
function printError(response) {
    if (response.responseJSON && response.responseJSON.message) {
        alert(`[상태 코드] ${response.status} ${response.responseJSON.httpStatus}\n[오류 메시지] ${response.responseJSON.message}`);
    }
    else {
        alert("알 수 없는 에러가 발생했습니다.");
    }
}