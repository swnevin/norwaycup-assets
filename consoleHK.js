 let proactiveMessage = "Hei, jeg hjelper deg gjerne!👋";
    let widgetStyleSheet = "https://swnevin.github.io/norwaycup_assets/styleHK.css";

    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '675da724bdfd5f757ce9d106' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          allowDangerousHTML: true,
          assistant: {
            stylesheet: widgetStyleSheet
          }
        }).then(() => {
          console.log('Voiceflow widget loaded successfully');
          window.voiceflow.chat.proactive.clear();
          window.voiceflow.chat.proactive.push(
            { type: 'text', payload: { message: proactiveMessage } }
          );
        }).catch((err) => console.error('Widget load failed:', err));
      };
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, 'script');
