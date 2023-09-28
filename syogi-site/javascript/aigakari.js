// html要素の取得
const gin = document.getElementById('3-7gin');
const gstart = document.getElementById('3-7gin-start');
const bstart = document.getElementById('bougin-start');
const sstart = document.getElementById('sikenbisya-btn');
const ustart = document.getElementById('uresinoryu-btn');
const music =new Audio('sound/koma.mp3');

// 3七銀戦法スタートボタン押した時の処理
gstart.addEventListener('click',() => {
setTimeout(() => {
  document.getElementById('a2-7').innerHTML = "";
  document.getElementById('a2-6').classList.remove("a-aite");
  document.getElementById('a2-6').innerHTML = "歩";
  music.play();
  document.getElementById('a2-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a2-6').style.backgroundColor = null;
      },250);
},2000);

setTimeout(() => {
  document.getElementById('a8-3').innerHTML = "";
  document.getElementById('a8-4').innerHTML = "歩";
  music.play();
  document.getElementById('a8-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a8-4').style.backgroundColor = null;
      },250);
},4000);

setTimeout(() => {
  document.getElementById('a2-6').innerHTML = "";
  document.getElementById('a2-5').classList.remove("a-aite");
  document.getElementById('a2-5').innerHTML = "歩";
  music.play();
  document.getElementById('a2-5').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a2-5').style.backgroundColor = null;
      },250);
},6000);

setTimeout(() => {
  document.getElementById('a8-4').innerHTML = "";
  document.getElementById('a8-5').innerHTML = "歩";
  music.play();
  document.getElementById('a8-5').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a8-5').style.backgroundColor = null;
      },250);
},8000);

setTimeout(() => {
  document.getElementById('a6-9').innerHTML = "";
  document.getElementById('a7-8').innerHTML = "金";
  music.play();
  document.getElementById('c7-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c7-8').style.backgroundColor = null;
      },250);
},10000);

setTimeout(() => {
  document.getElementById('a4-1').innerHTML = "";
  document.getElementById('a3-2').innerHTML = "金";
  music.play();
  document.getElementById('c7-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c7-8').style.backgroundColor = null;
      },250);
},12000);

setTimeout(() => {
  document.getElementById('a2-5').innerHTML = "";
  document.getElementById('a2-4').classList.remove("a-aite");
  document.getElementById('a2-4').innerHTML = "歩";
  music.play();
  document.getElementById('a2-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a2-4').style.backgroundColor = null;
      },250);
},14000);

setTimeout(() => {
  document.getElementById('a2-3').innerHTML = "";
  document.getElementById('a2-4').innerHTML = "歩";
  document.getElementById('a2-4').classList.add("a-aite");
  music.play();
  document.getElementById('a2-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a2-4').style.backgroundColor = null;
      },250);
},16000);

setTimeout(() => {
  document.getElementById('a2-8').innerHTML = "";
  document.getElementById('a2-4').innerHTML = "飛";
  document.getElementById('a2-4').classList.remove("a-aite");
  document.getElementById('a2-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a2-4').style.backgroundColor = null;
      },250);
  music.play();
},18000);

setTimeout(() => {
  document.getElementById('a2-3').innerHTML = "歩";
  music.play();
  document.getElementById('a2-3').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a2-3').style.backgroundColor = null;
      },250);
},20000);

setTimeout(() => {
  document.getElementById('a2-4').innerHTML = "";
  document.getElementById('a2-6').innerHTML = "飛";
  document.getElementById('a2-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a2-6').style.backgroundColor = null;
      },250);
  music.play();
},22000);

setTimeout(() => {
  document.getElementById('a7-1').innerHTML = "";
  document.getElementById('a7-2').innerHTML = "銀";
  music.play();
  document.getElementById('a7-2').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a7-2').style.backgroundColor = null;
      },250);
},24000);

setTimeout(() => {
  document.getElementById('a3-9').innerHTML = "";
  document.getElementById('a3-8').innerHTML = "銀";
  music.play();
  document.getElementById('a3-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a3-8').style.backgroundColor = null;
      },250);
},26000);

setTimeout(() => {
  document.getElementById('a1-3').innerHTML = "";
  document.getElementById('a1-4').innerHTML = "歩";
  music.play();
  document.getElementById('a1-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a1-4').style.backgroundColor = null;
      },250);
},28000);

setTimeout(() => {
  document.getElementById('a1-7').innerHTML = "";
  document.getElementById('a1-6').innerHTML = "歩";
  document.getElementById('a1-6').classList.remove("a-aite");
  music.play();
  document.getElementById('a1-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a1-6').style.backgroundColor = null;
      },250);
},30000);

setTimeout(() => {
  document.getElementById('a3-3').innerHTML = "";
  document.getElementById('a3-4').innerHTML = "歩";
  music.play();
  document.getElementById('a3-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a3-4').style.backgroundColor = null;
      },250);
},32000);

setTimeout(() => {
  document.getElementById('a7-7').innerHTML = "";
  document.getElementById('a7-6').innerHTML = "歩";
  document.getElementById('a7-6').classList.remove("a-aite");
  music.play();
  document.getElementById('a7-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a7-6').style.backgroundColor = null;
      },250);
},34000);

setTimeout(() => {
  document.getElementById('a8-5').innerHTML = "";
  document.getElementById('a8-6').innerHTML = "歩";
  music.play();
  document.getElementById('a8-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a8-6').style.backgroundColor = null;
      },250);
},36000);

setTimeout(() => {
  document.getElementById('a8-7').innerHTML = "";
  document.getElementById('a8-6').innerHTML = "歩";
  document.getElementById('a8-6').classList.remove("a-aite");
  music.play();
  document.getElementById('a8-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a8-6').style.backgroundColor = null;
      },250);
},38000);

setTimeout(() => {
  document.getElementById('a8-2').innerHTML = "";
  document.getElementById('a8-6').innerHTML = "飛";
  document.getElementById('a8-6').classList.add("a-aite");
  music.play();
  document.getElementById('a8-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a8-6').style.backgroundColor = null;
      },250);
},40000);

setTimeout(() => {
  document.getElementById('a8-7').innerHTML = "歩";
  music.play();
  document.getElementById('a8-7').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a8-7').style.backgroundColor = null;
      },250);
},42000);

setTimeout(() => {
  document.getElementById('a8-6').innerHTML = "";
  document.getElementById('a8-2').innerHTML = "飛";
  music.play();
  document.getElementById('a8-2').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a8-2').style.backgroundColor = null;
      },250);
},44000);

setTimeout(() => {
  document.getElementById('a3-7').innerHTML = "";
  document.getElementById('a3-6').innerHTML = "歩";
  document.getElementById('a3-6').classList.remove("a-aite");
  music.play();
  document.getElementById('a3-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a3-6').style.backgroundColor = null;
      },250);
},46000);

setTimeout(() => {
  document.getElementById('a6-3').innerHTML = "";
  document.getElementById('a6-4').innerHTML = "歩";
  music.play();
  document.getElementById('a6-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a6-4').style.backgroundColor = null;
      },250);
},48000);

setTimeout(() => {
  document.getElementById('a3-8').innerHTML = "";
  document.getElementById('a3-7').innerHTML = "銀";
  music.play();
  document.getElementById('a3-7').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('a3-7').style.backgroundColor = null;
      },250);
},50000);
});


// 相掛り棒銀戦法スタートボタン押した時の処理
bstart.addEventListener('click',() => {
  setTimeout(() => {
    document.getElementById('b2-7').innerHTML = "";
    document.getElementById('b2-6').innerHTML = "歩";
    document.getElementById('b2-6').classList.remove("b-aite");
    music.play();
    document.getElementById('b2-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b2-6').style.backgroundColor = null;
      },250);
  },2000);
  
  setTimeout(() => {
    document.getElementById('b8-3').innerHTML = "";
    document.getElementById('b8-4').innerHTML = "歩";
    music.play();
    document.getElementById('b8-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b8-4').style.backgroundColor = null;
      },250);
  },4000);
  
  setTimeout(() => {
    document.getElementById('b2-6').innerHTML = "";
    document.getElementById('b2-5').innerHTML = "歩";
    document.getElementById('b2-5').classList.remove("b-aite");
    music.play();
    document.getElementById('b2-5').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b2-5').style.backgroundColor = null;
      },250);
  },6000);
  
  setTimeout(() => {
    document.getElementById('b8-4').innerHTML = "";
    document.getElementById('b8-5').innerHTML = "歩";
    music.play();
    document.getElementById('b8-5').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b8-5').style.backgroundColor = null;
      },250);
  },8000);
  
  setTimeout(() => {
    document.getElementById('b6-9').innerHTML = "";
    document.getElementById('b7-8').innerHTML = "金";
    music.play();
    document.getElementById('b7-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b7-8').style.backgroundColor = null;
      },250);
  },10000);
  
  setTimeout(() => {
    document.getElementById('b4-1').innerHTML = "";
    document.getElementById('b3-2').innerHTML = "金";
    music.play();
    document.getElementById('b3-2').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b3-2').style.backgroundColor = null;
      },250);
  },12000);
  
  setTimeout(() => {
    document.getElementById('b2-5').innerHTML = "";
    document.getElementById('b2-4').classList.remove("b-aite");
    document.getElementById('b2-4').innerHTML = "歩";
    music.play();
    document.getElementById('b2-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b2-4').style.backgroundColor = null;
      },250);
  },14000);
  
  setTimeout(() => {
    document.getElementById('b2-3').innerHTML = "";
    document.getElementById('b2-4').innerHTML = "歩";
    document.getElementById('b2-4').classList.add("b-aite");
    music.play();
    document.getElementById('b2-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b2-4').style.backgroundColor = null;
      },250);
  },16000);
  
  setTimeout(() => {
    document.getElementById('b2-8').innerHTML = "";
    document.getElementById('b2-4').innerHTML = "飛";
    document.getElementById('b2-4').classList.remove("b-aite");
    music.play();
    document.getElementById('c2-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c2-4').style.backgroundColor = null;
      },250);
  },18000);
  
  setTimeout(() => {
    document.getElementById('b2-3').innerHTML = "歩";
    music.play();
    document.getElementById('b2-3').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b2-3').style.backgroundColor = null;
      },250);
  },20000);
  
  setTimeout(() => {
    document.getElementById('b2-4').innerHTML = "";
    document.getElementById('b2-8').innerHTML = "飛";
    music.play();
    document.getElementById('b2-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b2-8').style.backgroundColor = null;
      },250);
  },22000);
  
  setTimeout(() => {
    document.getElementById('b8-5').innerHTML = "";
    document.getElementById('b8-6').innerHTML = "歩";
    music.play();
    document.getElementById('b8-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b8-6').style.backgroundColor = null;
      },250);
  },24000);
  
  setTimeout(() => {
    document.getElementById('b8-5').innerHTML = "";
    document.getElementById('b8-6').innerHTML = "歩";
    music.play();
    document.getElementById('b8-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b8-6').style.backgroundColor = null;
      },250);
  },26000);
  
  setTimeout(() => {
    document.getElementById('b8-2').innerHTML = "";
    document.getElementById('b8-6').innerHTML = "飛";
    music.play();
    document.getElementById('b8-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b8-6').style.backgroundColor = null;
      },250);
  },28000);
  
  setTimeout(() => {
    document.getElementById('b8-7').innerHTML = "歩";
    music.play();
    document.getElementById('b8-7').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b8-7').style.backgroundColor = null;
      },250);
  },30000);
  
  setTimeout(() => {
    document.getElementById('b8-6').innerHTML = "";
    document.getElementById('b8-4').innerHTML = "飛";
    music.play();
    document.getElementById('b8-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b8-4').style.backgroundColor = null;
      },250);
  },32000);
  
  setTimeout(() => {
    document.getElementById('b3-9').innerHTML = "";
    document.getElementById('b3-8').innerHTML = "銀";
    music.play();
    document.getElementById('b3-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b3-8').style.backgroundColor = null;
      },250);
  },34000);
  
  setTimeout(() => {
    document.getElementById('b3-3').innerHTML = "";
    document.getElementById('b3-4').innerHTML = "歩";
    music.play();
    document.getElementById('b3-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b3-4').style.backgroundColor = null;
      },250);
  },36000);
  
  setTimeout(() => {
    document.getElementById('b3-8').innerHTML = "";
    document.getElementById('b2-7').innerHTML = "銀";
    music.play();
    document.getElementById('b2-7').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('b2-7').style.backgroundColor = null;
      },250);
  },38000);
  });


  // 右四間飛車のところ
  sstart.addEventListener('click',() => {
    setTimeout(() => {
      document.getElementById('c2-7').innerHTML = "";
      document.getElementById('c2-6').innerHTML = "歩";
      document.getElementById('c2-6').classList.remove("c-aite");
      music.play();
      document.getElementById('c2-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c2-6').style.backgroundColor = null;
      },250);
    },2000);
    
    setTimeout(() => {
      document.getElementById('c3-3').innerHTML = "";
      document.getElementById('c3-4').innerHTML = "歩";
      music.play();
      document.getElementById('c3-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c3-4').style.backgroundColor = null;
      },250);
    },4000);
    
    setTimeout(() => {
      document.getElementById('c7-7').innerHTML = "";
      document.getElementById('c7-6').innerHTML = "歩";
      document.getElementById('c7-6').classList.remove("c-aite");
      music.play();
      document.getElementById('c7-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c7-6').style.backgroundColor = null;
      },250);
    },6000);
    
    setTimeout(() => {
      document.getElementById('c4-3').innerHTML = "";
      document.getElementById('c4-4').innerHTML = "歩";
      music.play();
      document.getElementById('c4-4').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c4-4').style.backgroundColor = null;
      },250);
    },8000);
    
    setTimeout(() => {
      document.getElementById('c4-7').innerHTML = "";
      document.getElementById('c4-6').innerHTML = "歩";
      document.getElementById('c4-6').classList.remove("c-aite");
      music.play();
      document.getElementById('c4-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c4-6').style.backgroundColor = null;
      },250);
    },10000);
    
    setTimeout(() => {
      document.getElementById('c8-2').innerHTML = "";
      document.getElementById('c4-2').innerHTML = "飛";
      music.play();
      document.getElementById('c4-2').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c4-2').style.backgroundColor = null;
      },250);
    },12000);
    
    setTimeout(() => {
      document.getElementById('c3-9').innerHTML = "";
      document.getElementById('c4-8').innerHTML = "銀";
      music.play();
      document.getElementById('c4-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c4-8').style.backgroundColor = null;
      },250);
    },14000);
    
    setTimeout(() => {
      document.getElementById('c5-1').innerHTML = "";
      document.getElementById('c6-2').innerHTML = "玉";
      music.play(); 
      document.getElementById('c6-2').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c6-2').style.backgroundColor = null;
      },250);
    },16000);
    
    setTimeout(() => {
      document.getElementById('c4-8').innerHTML = "";
      document.getElementById('c4-7').innerHTML = "銀";
      music.play();
      document.getElementById('c4-7').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c4-7').style.backgroundColor = null;
      },250);
    },18000);
    
    setTimeout(() => {
      document.getElementById('c6-2').innerHTML = "";
      document.getElementById('c7-2').innerHTML = "玉";
      music.play();
      document.getElementById('c7-2').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c7-2').style.backgroundColor = null;
      },250);
    },20000);
    
    setTimeout(() => {
      document.getElementById('c4-7').innerHTML = "";
      document.getElementById('c5-6').innerHTML = "銀";
      document.getElementById('c5-6').classList.remove("c-aite");
      music.play();
      document.getElementById('c5-6').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c5-6').style.backgroundColor = null;
      },250);
    },22000);
    
    setTimeout(() => {
      document.getElementById('c3-1').innerHTML = "";
      document.getElementById('c3-2').innerHTML = "銀";
      music.play();
      document.getElementById('c3-2').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c3-2').style.backgroundColor = null;
      },250);
    },24000);
    
    setTimeout(() => {
      document.getElementById('c2-8').innerHTML = "";
      document.getElementById('c4-8').innerHTML = "飛";
      music.play();
      document.getElementById('c4-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c4-8').style.backgroundColor = null;
      },250);
    },26000);
    
    setTimeout(() => {
      document.getElementById('c3-2').innerHTML = "";
      document.getElementById('c4-3').innerHTML = "銀";
      music.play();
      document.getElementById('c4-3').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c4-3').style.backgroundColor = null;
      },250);
    },28000);
    
    setTimeout(() => {
      document.getElementById('c5-9').innerHTML = "";
      document.getElementById('c6-8').innerHTML = "王";
      music.play();
      document.getElementById('c6-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c6-8').style.backgroundColor = null;
      },250);
    },30000);
    
    setTimeout(() => {
      document.getElementById('c7-2').innerHTML = "";
      document.getElementById('c8-2').innerHTML = "玉";
      music.play();
      document.getElementById('c8-2').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c8-2').style.backgroundColor = null;
      },250);
    },32000);
    
    setTimeout(() => {
      document.getElementById('c6-8').innerHTML = "";
      document.getElementById('c7-8').innerHTML = "王";
      music.play();
      document.getElementById('c7-8').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c7-8').style.backgroundColor = null;
      },250);
    },34000);
    
    setTimeout(() => {
      document.getElementById('c7-1').innerHTML = "";
      document.getElementById('c7-2').innerHTML = "銀";
      music.play();
      document.getElementById('c7-2').style.backgroundColor = '#ffff00';
      setTimeout(() => {
        document.getElementById('c7-2').style.backgroundColor = null;
      },250);
    },36000);

    });


    // 嬉野流のところ
    ustart.addEventListener('click',() => {
      setTimeout(() => {
        document.getElementById('d7-9').innerHTML = "";
        document.getElementById('d6-8').innerHTML = "銀";
        music.play();
        document.getElementById('d6-8').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d6-8').style.backgroundColor = null;
        },250);
      },2000);
      
      setTimeout(() => {
        document.getElementById('d3-3').innerHTML = "";
        document.getElementById('d3-4').innerHTML = "歩";
        music.play();
        document.getElementById('d3-4').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d3-4').style.backgroundColor = null;
        },250);
      },4000);
      
      setTimeout(() => {
        document.getElementById('d5-7').innerHTML = "";
        document.getElementById('d5-6').innerHTML = "歩";
        document.getElementById('d5-6').classList.remove("d-aite");
        music.play();
        document.getElementById('d5-6').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d5-6').style.backgroundColor = null;
        },250);
      },6000);
      
      setTimeout(() => {
        document.getElementById('d8-2').innerHTML = "";
        document.getElementById('d4-2').innerHTML = "飛";
        music.play();
        document.getElementById('d4-2').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d4-2').style.backgroundColor = null;
        },250);
      },8000);
      
      setTimeout(() => {
        document.getElementById('d6-8').innerHTML = "";
        document.getElementById('d5-7').innerHTML = "銀";
        music.play();
        document.getElementById('d5-7').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d5-7').style.backgroundColor = null;
        },250);
      },10000);
      
      setTimeout(() => {
        document.getElementById('d5-1').innerHTML = "";
        document.getElementById('d6-2').innerHTML = "玉";
        music.play();
        document.getElementById('d6-2').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d6-2').style.backgroundColor = null;
        },250);
      },12000);
      
      setTimeout(() => {
        document.getElementById('d2-7').innerHTML = "";
        document.getElementById('d2-6').innerHTML = "歩";
        document.getElementById('d2-6').classList.remove("d-aite");
        music.play();
        document.getElementById('d2-6').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d2-6').style.backgroundColor = null;
        },250);
      },14000);
      
      setTimeout(() => {
        document.getElementById('d7-1').innerHTML = "";
        document.getElementById('d7-2').innerHTML = "銀";
        music.play(); 
        document.getElementById('d7-2').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d7-2').style.backgroundColor = null;
        },250);
      },16000);
      
      setTimeout(() => {
        document.getElementById('d2-6').innerHTML = "";
        document.getElementById('d2-5').innerHTML = "歩";
        document.getElementById('d2-5').classList.remove("d-aite");
        music.play();
        document.getElementById('d2-5').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d2-5').style.backgroundColor = null;
        },250);
      },18000);
      
      setTimeout(() => {
        document.getElementById('d2-2').innerHTML = "";
        document.getElementById('d3-3').innerHTML = "角";
        music.play();
        document.getElementById('d3-3').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d3-3').style.backgroundColor = null;
        },250);
      },20000);
      
      setTimeout(() => {
        document.getElementById('d8-8').innerHTML = "";
        document.getElementById('d7-9').innerHTML = "角";
        music.play();
        document.getElementById('d7-9').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d7-9').style.backgroundColor = null;
        },250);
      },22000);
      
      setTimeout(() => {
        document.getElementById('d4-3').innerHTML = "";
        document.getElementById('d4-4').innerHTML = "歩";
        music.play();
        document.getElementById('d4-4').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d4-4').style.backgroundColor = null;
        },250);
      },24000);
      
      setTimeout(() => {
        document.getElementById('d5-9').innerHTML = "";
        document.getElementById('d6-8').innerHTML = "王";
        music.play();
        document.getElementById('d6-8').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d6-8').style.backgroundColor = null;
        },250);
      },26000);
      
      setTimeout(() => {
        document.getElementById('d6-2').innerHTML = "";
        document.getElementById('d7-1').innerHTML = "玉";
        music.play();
        document.getElementById('d7-1').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d7-1').style.backgroundColor = null;
        },250);
      },28000);
      
      setTimeout(() => {
        document.getElementById('d6-8').innerHTML = "";
        document.getElementById('d7-8').innerHTML = "王";
        music.play();
        document.getElementById('d7-8').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d7-8').style.backgroundColor = null;
        },250);
      },30000);
      
      setTimeout(() => {
        document.getElementById('d3-1').innerHTML = "";
        document.getElementById('d3-2').innerHTML = "銀";
        music.play();
        document.getElementById('d3-2').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d3-2').style.backgroundColor = null;
        },250);
      },32000);
      
      setTimeout(() => {
        document.getElementById('d3-9').innerHTML = "";
        document.getElementById('d4-8').innerHTML = "銀";
        music.play();
        document.getElementById('d4-8').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d4-8').style.backgroundColor = null;
        },250);
      },34000);
      
      setTimeout(() => {
        document.getElementById('d7-1').innerHTML = "";
        document.getElementById('d8-2').innerHTML = "玉";
        music.play();
        document.getElementById('d8-2').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d8-2').style.backgroundColor = null;
        },250);
      },36000);
  
      setTimeout(() => {
        document.getElementById('d3-7').innerHTML = "";
        document.getElementById('d3-6').innerHTML = "歩";
        document.getElementById('d3-6').classList.remove("d-aite");
        music.play();
        document.getElementById('d3-6').style.backgroundColor = '#ffff00';
        setTimeout(() => {
          document.getElementById('d3-6').style.backgroundColor = null;
        },250);
      },38000);
      });