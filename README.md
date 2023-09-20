Langkah langkah kolaborasi :
1. Buat branch sendiri sesuai dengan fitur2nya
2. Jangan push ke branch main, push sesuai fungsinya


Langkah mengerjakan 
1. git clone {url}   => setelah sukses cloning buat branch baru sesuai fitur
2. git branch {nama branch}   => buat branch baru sesuai fiturnya
3. git checkout {nama branch yang baru di buat}  => pindah dari branch awal ke branch yang baru
4. --------Lakukan editing project------------
5. git add .   => untuk menambahkan ke staged sebelum di kasih commit (di tandai dengan commit)
5. git commit -m "comentar perubahan"   => untuk menandai  perubahan apa saja yang di lakukan
6. git push --set-upstream origin {nama branch}   => untuk push file sekalian membuat branch baru di github

