(ns darbar.core
  (:require [hipo.core :as hipo]))

(enable-console-print!)

;;
;; Definitions
;;

(def p (.getElementById js/document "player"))

(def t (js/Date.))

(def seconds-since-2am (+ (* (- (.getHours t) 2) 3600) 
                          (* (.getMinutes t) 60) 
                          (.getSeconds t)))

(def month-names {1 "January"
                  2 "February"
                  3 "March"
                  4 "April"
                  5 "May"
                  6 "June"
                  7 "July"
                  8 "August"
                  9 "September"
                  10 "October"
                  11 "November"
                  12 "December"})

(def urls
  (let [yyyy (.getFullYear t)
        m (+ (.getMonth t) 1)
        d (.getDate t)
        mm (if (>= m 10) (str m) (str 0 m))
        dd (if (>= d 10) (str d) (str 0 d))
        month (month-names m)
        prev-month (month-names (- m 1))]
    [(str "http://new.sgpc.net/kirtan/" yyyy "/" month "/recorded" dd mm yyyy ".mp3")
     (str "http://new.sgpc.net/kirtan/" yyyy "/" month "/recorded" dd mm yyyy "%20(1).mp3")
     (str "http://new.sgpc.net/kirtan/" yyyy "/" month "/recorded" dd mm yyyy "%20(2).mp3")
     (str "http://new.sgpc.net/kirtan/" yyyy "/" prev-month "/recorded" dd mm yyyy ".mp3")
     (str "http://new.sgpc.net/kirtan/" yyyy "/" prev-month "/recorded" dd mm yyyy "%20(1).mp3")
     (str "http://new.sgpc.net/kirtan/" yyyy "/" prev-month "/recorded" dd mm yyyy "%20(2).mp3")]))

(defn make-source [url]
  (hipo/create [:source {:src url :type "audio/mpeg"}]))

(def els (map make-source urls))

;;
;; Modifications
;;

(doall (for [el els] (.appendChild p el)))

(aset p "currentTime" seconds-since-2am)

(.play p)

;; define your app data so that it doesn't get over-written on reload

; (defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
