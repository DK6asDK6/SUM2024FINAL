var chsBundled=function(e){"use strict";let t,n,o=!1;function s(){t=new WebSocket("ws://brook-nettle-devourer.glitch.me"),t.onopen=()=>{console.log("open"),t.send(JSON.stringify({type:"nonUser"}));let e=window.sessionStorage.getItem("user");null==e&&(e=window.localStorage.getItem("user")),t.send(JSON.stringify({type:"getRooms",user:e}))},t.onmessage=e=>{!async function(e){if(n=JSON.parse(e),"retRooms"==n.type){let e=document.getElementById("rooms");for(let t of n.rooms){let n=t.split(":")[1];e.innerHTML+=`<option value="${n}">${n}</option>`}}else if("access"==n.type){const e={room:n.room,user:n._user};fetch("/main",{method:"GET",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}})}console.log(n)}(e.data)}}function l(){s()}return window.addEventListener("load",l),e.init=l,e.onNew=function(){let e=document.getElementById("choose");o||(e.innerHTML+='\n  <tr>\n    <td colspan="2">\n      <label for "new"> Just enter game name and start! </label>\n      <br />\n      <input type="text" class="new" id="new"/>\n    </td>\n  </tr>\n  '),o=!0},e.onSubmit=async function(){let e=null!=document.getElementById("new")||null!=document.getElementById("rooms").options[0];console.log(window.localStorage.getItem("user"));let t=window.localStorage.getItem("user");if(null==t&&(t=window.sessionStorage.getItem("user")),e){let e="";if(null!=document.getElementById("new")&&""!=$("#new").val().trim())e=$("#new").val();else{let t=document.getElementById("rooms");e=t.options[t.selectedIndex].text}let n=JSON.stringify({user:t,roomName:e});window.sessionStorage.setItem("room",e),await fetch("/toRoom",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:n}).then((()=>{window.location="/room"}))}},e}({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hvb3NlLmpzIiwic291cmNlcyI6WyIuLi9jaG9vc2VtYXAvY2hvb3NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWUsIHVzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jbGFzc2VzXCI7XG5cbmxldCBzb2NrZXQ7XG5sZXQgcmVzcG9uY2U7XG5cbmxldCBwcmVzc2VkID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5ldygpIHtcbiAgbGV0IHRhYmxldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hvb3NlXCIpO1xuICBpZiAoIXByZXNzZWQpXG4gICAgdGFibGV0LmlubmVySFRNTCArPSBgXG4gIDx0cj5cbiAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgIDxsYWJlbCBmb3IgXCJuZXdcIj4gSnVzdCBlbnRlciBnYW1lIG5hbWUgYW5kIHN0YXJ0ISA8L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm5ld1wiIGlkPVwibmV3XCIvPlxuICAgIDwvdGQ+XG4gIDwvdHI+XG4gIGA7XG5cbiAgcHJlc3NlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdCgpIHtcbiAgbGV0IGV4aXN0ZW5jZSA9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdcIikgIT0gdW5kZWZpbmVkIHx8XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb29tc1wiKS5vcHRpb25zWzBdICE9IHVuZGVmaW5lZDtcblxuICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcbiAgbGV0IG5hbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xuICBpZiAobmFtZSA9PSB1bmRlZmluZWQpIG5hbWUgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG5cbiAgaWYgKGV4aXN0ZW5jZSkge1xuICAgIGxldCBtZXMgPSBcIlwiO1xuXG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdcIikgIT0gdW5kZWZpbmVkICYmXG4gICAgICAkKFwiI25ld1wiKS52YWwoKS50cmltKCkgIT0gXCJcIlxuICAgIClcbiAgICAgIG1lcyA9ICQoXCIjbmV3XCIpLnZhbCgpO1xuICAgIGVsc2Uge1xuICAgICAgbGV0IHNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbXNcIik7XG4gICAgICBtZXMgPSBzZWwub3B0aW9uc1tzZWwuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICB9XG5cbiAgICBsZXQgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHVzZXI6IG5hbWUsXG4gICAgICByb29tTmFtZTogbWVzLFxuICAgIH0pO1xuXG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJyb29tXCIsIG1lcyk7XG5cbiAgICAvLyAkLnBvc3Qoe1xuICAgIC8vICAgdXJsOiBcIi90b1Jvb21cIixcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBib2R5OiBtZXNzYWdlLFxuICAgIC8vICAgLy8gYm9keToge1xuICAgIC8vICAgLy8gICB1c2VyOiBuYW1lLFxuICAgIC8vICAgLy8gICByb29tTmFtZTogbWVzLFxuICAgIC8vICAgLy8gfSxcbiAgICAvLyB9KTtcblxuICAgIGF3YWl0IGZldGNoKFwiL3RvUm9vbVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOFwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IG1lc3NhZ2UsXG4gICAgICAvLyBib2R5OiB7IHVzZXI6IG5hbWUsIHJvb21OYW1lOiBtZXMgfSxcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL3Jvb21cIjtcbiAgICB9KTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFjdE9uTWVzc2FnZShzcmMpIHtcbiAgcmVzcG9uY2UgPSBKU09OLnBhcnNlKHNyYyk7XG5cbiAgaWYgKHJlc3BvbmNlLnR5cGUgPT0gXCJyZXRSb29tc1wiKSB7XG4gICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vbXNcIik7XG5cbiAgICBmb3IgKGxldCByb29tMSBvZiByZXNwb25jZS5yb29tcykge1xuICAgICAgbGV0IHJvb20gPSByb29tMS5zcGxpdChcIjpcIilbMV07XG4gICAgICBzZWxlY3QuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtyb29tfVwiPiR7cm9vbX08L29wdGlvbj5gO1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZXNwb25jZS50eXBlID09IFwiYWNjZXNzXCIpIHtcbiAgICBjb25zdCBtZXMgPSB7XG4gICAgICByb29tOiByZXNwb25jZS5yb29tLFxuICAgICAgdXNlcjogcmVzcG9uY2UuX3VzZXIsXG4gICAgfTtcbiAgICBmZXRjaChcIi9tYWluXCIsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lcyksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHJlc3BvbmNlKTtcbn1cblxuZnVuY3Rpb24gaW5pdENvbW11bmljYXRpb24oKSB7XG4gIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2Jyb29rLW5ldHRsZS1kZXZvdXJlci5nbGl0Y2gubWVcIik7XG5cbiAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIik7XG4gICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiBcIm5vblVzZXJcIiB9KSk7XG5cbiAgICBsZXQgdXNlciA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKTtcblxuICAgIGlmICh1c2VyID09IG51bGwpIHVzZXIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xuXG4gICAgc29ja2V0LnNlbmQoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHR5cGU6IFwiZ2V0Um9vbXNcIixcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBzb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgcmVhY3RPbk1lc3NhZ2UoZXZlbnQuZGF0YSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICBpbml0Q29tbXVuaWNhdGlvbigpO1xuICAvLyBtYWluKCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KTtcbiJdLCJuYW1lcyI6WyJzb2NrZXQiLCJyZXNwb25jZSIsInByZXNzZWQiLCJpbml0Q29tbXVuaWNhdGlvbiIsIldlYlNvY2tldCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJ1c2VyIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxTdG9yYWdlIiwib25tZXNzYWdlIiwiZXZlbnQiLCJhc3luYyIsInNyYyIsInBhcnNlIiwic2VsZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb20xIiwicm9vbXMiLCJyb29tIiwic3BsaXQiLCJpbm5lckhUTUwiLCJtZXMiLCJfdXNlciIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJyZWFjdE9uTWVzc2FnZSIsImRhdGEiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhYmxldCIsImV4aXN0ZW5jZSIsInVuZGVmaW5lZCIsIm9wdGlvbnMiLCJuYW1lIiwiJCIsInZhbCIsInRyaW0iLCJzZWwiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsIm1lc3NhZ2UiLCJyb29tTmFtZSIsInNldEl0ZW0iLCJ0aGVuIiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiJ3Q0FFQSxJQUFJQSxFQUNBQyxFQUVBQyxHQUFVLEVBbUdkLFNBQVNDLElBQ1BILEVBQVMsSUFBSUksVUFBVSx3Q0FFdkJKLEVBQU9LLE9BQVMsS0FDZEMsUUFBUUMsSUFBSSxRQUNaUCxFQUFPUSxLQUFLQyxLQUFLQyxVQUFVLENBQUVDLEtBQU0sYUFFbkMsSUFBSUMsRUFBT0MsT0FBT0MsZUFBZUMsUUFBUSxRQUU3QixNQUFSSCxJQUFjQSxFQUFPQyxPQUFPRyxhQUFhRCxRQUFRLFNBRXJEZixFQUFPUSxLQUNMQyxLQUFLQyxVQUFVLENBQ2JDLEtBQU0sV0FDTkMsS0FBTUEsSUFFVCxFQUdIWixFQUFPaUIsVUFBYUMsS0E5Q3RCQyxlQUE4QkMsR0FHNUIsR0FGQW5CLEVBQVdRLEtBQUtZLE1BQU1ELEdBRUQsWUFBakJuQixFQUFTVSxLQUFvQixDQUMvQixJQUFJVyxFQUFTQyxTQUFTQyxlQUFlLFNBRXJDLElBQUssSUFBSUMsS0FBU3hCLEVBQVN5QixNQUFPLENBQ2hDLElBQUlDLEVBQU9GLEVBQU1HLE1BQU0sS0FBSyxHQUM1Qk4sRUFBT08sV0FBYSxrQkFBa0JGLE1BQVNBLFlBQ2hELENBQ0wsTUFBUyxHQUFxQixVQUFqQjFCLEVBQVNVLEtBQWtCLENBQ3BDLE1BQU1tQixFQUFNLENBQ1ZILEtBQU0xQixFQUFTMEIsS0FDZmYsS0FBTVgsRUFBUzhCLE9BRWpCQyxNQUFNLFFBQVMsQ0FDYkMsT0FBUSxNQUNSQyxLQUFNekIsS0FBS0MsVUFBVW9CLEdBQ3JCSyxRQUFTLENBQ1AsZUFBZ0Isb0NBR3JCLENBRUQ3QixRQUFRQyxJQUFJTixFQUNkLENBc0JJbUMsQ0FBZWxCLEVBQU1tQixLQUFLLENBRTlCLENBRU8sU0FBU0MsSUFDZG5DLEdBRUYsUUFFQVUsT0FBTzBCLGlCQUFpQixPQUFRRCxvQkE5SHpCLFdBQ0wsSUFBSUUsRUFBU2pCLFNBQVNDLGVBQWUsVUFDaEN0QixJQUNIc0MsRUFBT1gsV0FBYSwyTEFVdEIzQixHQUFVLENBQ1osYUFFT2lCLGlCQUNMLElBQUlzQixFQUNnQ0MsTUFBbENuQixTQUFTQyxlQUFlLFFBQ3VCa0IsTUFBL0NuQixTQUFTQyxlQUFlLFNBQVNtQixRQUFRLEdBRTNDckMsUUFBUUMsSUFBSU0sT0FBT0csYUFBYUQsUUFBUSxTQUN4QyxJQUFJNkIsRUFBTy9CLE9BQU9HLGFBQWFELFFBQVEsUUFHdkMsR0FGWTJCLE1BQVJFLElBQW1CQSxFQUFPL0IsT0FBT0MsZUFBZUMsUUFBUSxTQUV4RDBCLEVBQVcsQ0FDYixJQUFJWCxFQUFNLEdBRVYsR0FDb0NZLE1BQWxDbkIsU0FBU0MsZUFBZSxRQUNFLElBQTFCcUIsRUFBRSxRQUFRQyxNQUFNQyxPQUVoQmpCLEVBQU1lLEVBQUUsUUFBUUMsVUFDYixDQUNILElBQUlFLEVBQU16QixTQUFTQyxlQUFlLFNBQ2xDTSxFQUFNa0IsRUFBSUwsUUFBUUssRUFBSUMsZUFBZUMsSUFDdEMsQ0FFRCxJQUFJQyxFQUFVMUMsS0FBS0MsVUFBVSxDQUMzQkUsS0FBTWdDLEVBQ05RLFNBQVV0QixJQUdaakIsT0FBT0MsZUFBZXVDLFFBQVEsT0FBUXZCLFNBY2hDRSxNQUFNLFVBQVcsQ0FDckJDLE9BQVEsT0FDUkUsUUFBUyxDQUNQLGVBQWdCLGtDQUVsQkQsS0FBTWlCLElBRUxHLE1BQUssS0FDTnpDLE9BQU8wQyxTQUFXLE9BQU8sR0FFNUIsQ0FDSCJ9
